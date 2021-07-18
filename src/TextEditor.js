import { useEffect, useState, useContext } from "react"
import { io } from "socket.io-client"
import { useParams } from "react-router-dom"

import Automerge from 'automerge'

import './TextEditor.css'

import Editor, { Range } from "@monaco-editor/react"
import { patienceDiff } from './utils/PatienceDiff';
import { ThemeContext } from "./ThemeContext"

const SAVE_INTERVAL_MS = 20000

/**
 * Turn monaco editor delta into a quill delta
 * 
 * @param {string} previous string 
 * @param {string} current string
 */
function monacoToDeltas(previous, current) {
  const difference = patienceDiff(previous.split(''), current.split(''), false)

  const deltaSteps = []

  let currRetainCount = 0
  let currInsertCount = 0
  let currDeleteCount = 0

  difference.lines.forEach((element, index) => {
    if (element.aIndex >= 0 && element.bIndex >= 0) {
      currRetainCount++;
      currInsertCount = 0;
      currDeleteCount = 0;
      deltaSteps.push({ 'retain': currRetainCount })
      return
    }

    if (element.aIndex >= 0 && element.bIndex <= 0) {
      currDeleteCount++;
      currInsertCount = 0;
      currRetainCount = 0;
      deltaSteps.push({ 'delete': currDeleteCount })
    }
    if (element.aIndex <= 0 && element.bIndex >= 0) {
      let insertElement = '';
      if (currInsertCount > 0 && index > 0) {
        insertElement = deltaSteps[index - 1].insert + element.line;
      } else {
        insertElement = element.line;
      }
      currInsertCount++;
      currDeleteCount = 0;
      currRetainCount = 0;

      deltaSteps.push({ 'insert': insertElement })
    }
  });

  let deltaActions = [];
  if (deltaSteps.length == 1) {
    deltaActions.push(deltaSteps[0]);
  }

  for (let previousPointer = 0; previousPointer < deltaSteps.length - 1; previousPointer++) {
    let currentPointer = previousPointer + 1;
    if (Object.keys(deltaSteps[currentPointer])[0] !== Object.keys(deltaSteps[previousPointer])[0]) {
      deltaActions.push(deltaSteps[previousPointer]);
    }
    if (currentPointer == deltaSteps.length - 1) {
      deltaActions.push(deltaSteps[currentPointer]);
    }
  }

  return deltaActions;
}

/**
 * Convert monaco cursor position to an index
 * @param {string} text the current text
 * @param {number} lineNumber the line number, 0 indexed
 * @param {number} column the column index, 0 indexed
 */
function getCursorPosition(text, lineNumber, column) {
  let line = text.split('\n').slice(0, lineNumber);
  let index = line.join('\n').length + column;
  return index;
}

function calculateCursorPosition(text, position) {
  let line = text.split('\n').map((element) => element + '\n');
  // // console.log(line);
  let counter = 0;
  for (let i = 0; i < line.length; i++) {
    const lineContent = line[i];
    for (let j = 0; j < lineContent.length; j++) {
      if (counter == position) {
        return { line: i, column: j };
      }
      counter++;
    }
    counter++;
  }

  return { line: -1, column: -1 };
}

export default function TextEditor(props) {
  const { id: documentId } = useParams()
  const [socket, setSocket] = useState()
  const [document, setDocument] = useState()
  const [editor, setEditor] = useState()

  const [displayValue, setDisplayValue] = useState('')

  // a hash of [source][docId] containing in-memory sync states
  const [syncStates, setSyncStates] = useState({})
  // const [cursorElement, setCursorElement] = useState()

  const [cursorPosition, setCursorPosition] = useState({ lineNumber: 1, column: 1 })

  const [peerCursorPositions, setPeerCursorPositions] = useState({})
  const [packet, setPacket] = useState(null)

  const [monaco, setMonaco] = useState(null)


  const { language: editorLanguage, setLanguage: setEditorLanguage, status, setStatus } = useContext(ThemeContext)

  // init
  useEffect(() => {
    const s = io("http://localhost:3001/")

    setSocket(s)
    // console.log('socket connected')
    let d = Automerge.change(Automerge.init(), doc => {
      doc.text = new Automerge.Text()
    })
    setDocument(d)
    setSyncStates(Automerge.initSyncState())
    // if (socket == null) return
    s.emit("get-document", documentId)
    return () => {
      setStatus(false)
      s.disconnect()
    }
  }, [])

  // Receive and Apply Changes
  useEffect(() => {
    if (socket == null || editor == null) return

    const handler = (data) => {
      setStatus(true)
      // // console.log('received packet')
      const { lineNumber: line, column: column } = editor.getPosition()
      // // console.log(`${line}, ${column}`)

      setCursorPosition({ lineNumber: line, column: column })
      const currentCursorPosition = getCursorPosition(displayValue, line - 1, column - 1)
      // // console.log(currentCursorPosition)

      const { state, changes, messages, language, cursorData } = JSON.parse(data)

      // console.log(cursorData)

      // // console.log(peerCursorPositions)

      if (cursorData != null) {
        setPeerCursorPositions((prev) => ({ ...prev, [cursorData.id]: cursorData.position }))
      }

      if (language != null && editorLanguage !== language) {
        setEditorLanguage(language)
      }

      if (state == null || changes == null || messages == null) {
        return
      }

      // console.log('hello')

      const parsedSyncChanges = JSON.parse(changes)
      let binaryArrayChanges = parsedSyncChanges.map((binArr) => new Uint8Array((Object.values(binArr).map(num => num))))
      const parsedSyncMessages = JSON.parse(messages)
      let binaryArrayMessages = Object.values(parsedSyncMessages).map((num) => (num))

      let [newDoc, newSyncState,] = Automerge.receiveSyncMessage(document, state, new Uint8Array(binaryArrayMessages))

      let [changedDoc,] = Automerge.applyChanges(newDoc, binaryArrayChanges)
      // setCursorElement(changedDoc.text.elems[currentCursorPosition] ? changedDoc.text.elems[currentCursorPosition]['elemId'] : '')
      const newValue = changedDoc.text.toString()
      setDocument(Automerge.clone(changedDoc))
      setDisplayValue(newValue)
      setSyncStates(newSyncState)
    }
    socket.on("receive-changes", handler)

    return () => {
      socket.off("receive-changes", handler)
    }
  }, [socket, document, editor])

  // Synchronize Editor
  useEffect(() => {
    if (socket == null || editor == null) return


    const handler = () => {
      setStatus(true)
      const timer = setTimeout(() => {
        try {
          let updatedChanges = Automerge.getChanges(Automerge.init(), Automerge.clone(document))
          let [updatedSyncState, updatedMessage] = Automerge.generateSyncMessage(document, syncStates)

          const newPacket = {
            state: updatedSyncState,
            messages: JSON.stringify(updatedMessage),
            changes: JSON.stringify(updatedChanges),
            language: props.language,
            cursorData: {
              id: socket.id,
              position: editor.getPosition(),
            }
          }

          setPacket(newPacket)
        } catch (e) {
          setStatus(false)
        }
      }, 2000);
      return () => clearTimeout(timer);
    }

    socket.on("synchronize-editor", handler)

    return () => {
      socket.off("synchronize-editor", handler)
    }
  }, [socket, document])

  // Synchronize Language
  useEffect(() => {
    if (socket == null || editor == null) return
    const newPacket = {
      state: null,
      messages: null,
      changes: null,
      language: editorLanguage,
    }

    setPacket(newPacket)
  }, [editorLanguage])

  // Emit Changes
  useEffect(() => {
    if (packet == null || socket == null) return

    const interval = setInterval(() => {
      socket.emit("send-changes", JSON.stringify(packet), documentId)
      setPacket(null)
    }, 250)

    return () => {
      clearInterval(interval)
    }

  }, [packet])

  // Apply Editor Changes
  useEffect(() => {
    if (socket == null || editor == null) return
    const model = editor.getModel()
    if (model == null) return;

    if (model.getValue() == displayValue) return
    // model.pushEditOperations([],
    editor.executeEdits('',
      [
        {
          forceMoveMarkers: false,
          range: model.getFullModelRange(),
          text: displayValue
        }
      ], () => null,
    );

    editor.setPosition(cursorPosition)

    // let updatedCursorPosition = -1
    // // find the cursor position
    // document.text.elems.forEach((element, index) => {
    //   if (element.elemId === cursorElement) {
    //     updatedCursorPosition = index
    //   }
    // })

    // if (updatedCursorPosition !== -1) {
    //   const { line, column } = calculateCursorPosition(displayValue, updatedCursorPosition)
    // }


  }, [displayValue])

  // Synchorize Cursors
  useEffect(() => {
    if (socket == null || editor == null) return

    editor.onDidChangeCursorPosition((event) => {
      console.log(event)
      const { position, reason, source } = event

      if (source === 'modelChange' || source === 'api') return

      if ((source === 'keyboard' || source === 'mouse') && reason === 3) {

        // console.log('hi')
        setCursorPosition(position)
        // // console.log(source)
        // // console.log(`${position.lineNumber}, ${position.column}`)

        const newPacket = {
          state: null,
          messages: null,
          changes: null,
          language: null,
          cursorData: {
            id: socket.id,
            position: position,
          }
        }
        setPacket(newPacket)
      }

    })


  }, [editor])

  // Apply Peer Cursors
  useEffect(() => {
    if (socket == null || editor == null) return

    // console.log(peerCursorPositions)

    // editor.deltaDecorations([], [{ range: editor.getModel().getFullModelRange(), options: {} }]);
    editor.getModel().setValue(editor.getModel().getValue())
    // editor.deltaDecorations([],
    //   Object.entries(peerCursorPositions).map(([id, position]) => {
    //     if (id == undefined) return null
    //     const { lineNumber, column } = position
    //     return {
    //       range: new monaco.Range(lineNumber, column, lineNumber, column),
    //       options: { className: 'my-cursor' }
    //     }
    //   }).filter((el) => el !== null)
    // );


  }, [peerCursorPositions])

  return <div className="container">
    <Editor
      height={'calc(100vh - 63px)'}
      theme={props.theme}
      language={editorLanguage}
      onMount={(editor, monaco) => {
        setEditor(editor)
        setMonaco(monaco)
      }} 
      onChange={(value, event) => {
        if (value === document.text.toString() || value === displayValue) return
        const ops = monacoToDeltas(document.text.toString(), value)

        let pointer = 0;
        try {
          let temp = Automerge.change(document, "change", doc => {
            if (!doc.text) {
              doc.text = new Automerge.Text()
            }

            for (let i = 0; i < ops.length; i++) {
              if (ops[i].retain) {
                pointer += ops[i].retain;
              } else if (ops[i].delete) {
                doc.text.deleteAt(pointer, ops[i].delete)
              } else if (ops[i].insert) {
                const splitString = ops[i].insert.split('')
                doc.text.insertAt(pointer, ...splitString)
                pointer += ops[i].insert.length;
              }
            }
          })

          let updatedChanges = Automerge.getChanges(Automerge.init(), Automerge.clone(temp))
          let [updatedSyncState, updatedMessage] = Automerge.generateSyncMessage(temp, syncStates)

          const newPacket = {
            state: updatedSyncState,
            messages: JSON.stringify(updatedMessage),
            changes: JSON.stringify(updatedChanges),
            language: props.language,
            cursorData: {
              id: socket.id,
              position: editor.getPosition(),
            }
          }

          setPacket(newPacket)
          setDocument(temp)
          setSyncStates(updatedSyncState)
          setDisplayValue(value)

          if (!status) setStatus(true)
        } catch (e) {
          setStatus(false)
        }
        // console.log(editor.getPosition())
      }}
    />
  </div>
}
