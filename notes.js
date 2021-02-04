const fs = require('fs')
const chalk = require('chalk')

// const getNotes = function() {
//     return 'Your notes...'
// }

const getNotes = () => 'Your notes...'

//const addNote = function (title, body) {
const addNote = (title, body) => {

    const notes = loadNotes()

    // const duplicateNotes = notes.filter(function(note) {
    //     return note.title === title
    // })

    const duplicateNotes = notes.filter((note) => note.title === title) 
       
    if (duplicateNotes.length === 0) {
        notes.push( {
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added!'))
    } else {
        console.log(chalk.red.inverse('Note title taken!'))
    }

    // notes.push( {
    //     title: title,
    //     body: body
    // })
    //console.log(notes)
    saveNotes(notes)
}

// const removeNote = function(title) {
const removeNote = (title) => {   
    //console.log(title)
    const notes = loadNotes()
    // const notesToKeep = notes.filter(function(note) {
    //     return note.title != title
    // })
    const notesToKeep = notes.filter((note) => note.title != title)
    if (notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse('Note removed'))
        saveNotes(notesToKeep)
    } else {
        console.log(chalk.red.inverse('No note found'))
    }
    //saveNotes(notesToKeep)
}

// const saveNotes = function (notes) {
//     const dataJSON = JSON.stringify(notes)
//     fs.writeFileSync('notes.json', dataJSON)
// }

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

// const loadNotes = function() {
//     try {
//         const dataBuffer = fs.readFileSync('notes.json')
//         const dataJSON = dataBuffer.toString()
//         return JSON.parse(dataJSON)  
//     } catch (e) {
//         return []
//     }
    // const dataBuffer = fs.readFileSync('notes.json')
    // const dataJSON = dataBuffer.toString()
    // return JSON.parse(dataJSON)
// }
const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)  
    } catch (e) {
        return []
    }
}

//module.exports = getNotes 
module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNotes: removeNote
}