const Automerge = require('automerge')
// Initialize documents with known actor IDs
let doc1 = Automerge.change(Automerge.init('ac01'), doc => {
    doc.x = 1
})
let doc2 = Automerge.change(Automerge.init('ac02'), doc => {
    doc.x = 2
})
doc1 = Automerge.merge(doc1, doc2)
doc2 = Automerge.merge(doc2, doc1)

console.log(JSON.stringify(doc1))
console.log(JSON.stringify(doc2))

// Now, doc1 might be either {x: 1} or {x: 2} -- the choice is random.
// However, doc2 will be the same, whichever value is chosen as winner.
// assert.deepEqual(doc1, doc2)