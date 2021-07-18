import React, { useState, useContext } from 'react'
import './EditorWrapper.css'
import Editor from "@monaco-editor/react"
import { useParams } from "react-router-dom"

import { ThemeContext } from './ThemeContext'

import Modal from '@material-ui/core/Modal';
import TextEditor from './TextEditor'
// Static Data
import languages from './static/languages.json'
import Switch from "react-switch";

// Icons
import { VscRemote } from "react-icons/vsc";
import LanguageIcon from "./static/LanguageIcon"

// create a wrapper for TextEditor
function EditorWrapper() {
    const { id: documentId } = useParams()

    const { language, setLanguage, dark, setDark, status, setStatus } = useContext(ThemeContext)
    // console.log(context)

    // const [language, setLanguage] = useState("javascript")
    // const [dark, setDark] = useState(true);

    const [open, setOpen] = useState(false);
    const [filter, setFilter] = useState("")

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setFilter("");
        setOpen(false);
    };

    const handleDark = () => {
        setDark(!dark);
    }

    return (
        <div className="editor-wrapper">
            <Modal
                open={open}
                onClose={handleClose}
                disableAutoFocus={true}
                disableEnforceFocus={true}
                BackdropProps={{ invisible: true }}
            >
                <div className="search-modal">
                    <form className="language-search-container">
                        <input
                            type="text"
                            placeholder="Search language mode"
                            className="language-search"
                            onChange={e => setFilter(e.target.value)}
                        />
                    </form>
                    <div className="language-search-result">
                        {languages.filter((item) => item.includes(filter)).map((item, index) => {
                            return (
                                <div className="language-selection" key={'language-' + index} onClick={() => {
                                    setLanguage(item);
                                    handleClose();
                                }}>
                                    <div className="language-icon">
                                        <LanguageIcon language={item} />
                                    </div>
                                    {item.toUpperCase()[0] + item.slice(1)}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </Modal>

            <div className="editor-header">
                <div className="editor-header-left">
                    Document ID: {documentId}
                </div>

                <div className="editor-header-right">
                    <span className={`status-dot ${status ? 'status-dot-sync' : 'status-dot-desync'}`}></span>
                    <div className="status-message">
                        {status ? 'Synchronized' : 'Desynchronized'}
                    </div>
                    <label>
                        <Switch
                            checked={dark}
                            onChange={handleDark}
                            onColor="#4b99f0"
                            onHandleColor="#fff"
                            handleDiameter={18}
                            uncheckedIcon={false}
                            checkedIcon={false}
                            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                            activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                            height={18}
                            width={40}
                            className="react-switch"
                            id="material-switch"
                        />
                    </label>
                </div>
            </div>

            <div className="editor-body">
                <TextEditor
                    theme={dark ? "vs-dark" : "vs"}
                    language={language}
                />
                {/* <Editor
                    theme={dark ? "vs-dark" : "vs"}
                    language={language}
                    defaultValue="// some comment"
                /> */}
            </div>

            <div className="editor-footer">
                <div className="editor-footer-version editor-footer-text">
                    <VscRemote />
                    <a style={{ marginLeft: '7px' }}>
                        MergePad
                    </a>
                </div>
                {/* <div className="editor-footer-text">
                    <a href='https://www.freepik.com/vectors/man' style={{ fontSize: '13px', textDecoration: 'none', color: '#607a85'}}>Man vector created by studiogstock - www.freepik.com</a>
                </div> */}
                <div className="editor-footer-language editor-footer-text" onClick={handleOpen}>
                    {language.toUpperCase()[0] + language.slice(1)}
                </div>
            </div>
        </div>
    )
}

export default EditorWrapper