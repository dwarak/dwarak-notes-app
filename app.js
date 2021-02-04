
const fs = require('fs')
//fs.writeFileSync('notes.txt','This file was created by NOde.js')
//fs.writeFileSync('notes.txt','Introduction to node.js')
fs.appendFileSync('notes.txt', 'I live in Chennai')
//const name = require('./utils.js')
//const firstname = require('./utils.js')
//const name = 'Benchmark'
//console.log(firstname)
//const add = require('./utils.js')
//const sum = add(4, -2)
//console.log(sum)
//const validator = require('validator')
const chalk = require('chalk')
//const getNotes = require('./notes.js')
//const msg = getNotes()
//console.log(msg)
//const greenMsg = chalk.green('Success!')
//const greenMsg = chalk.bold.green('Success!')
//const greenMsg = chalk.green.bold('Success!')
//const greenMsg = chalk.green.inverse.bold('Success!')
const greenMsg = chalk.blue.inverse.bold('Success!')
console.log(greenMsg)
//console.log(validator.isEmail('benchsoft@hotmail.com'))
//console.log(validator.isURL('http://benchsoft.in'))
//console.log(process.argv[])
//console.log(process.argv[2])
const yargs = require('yargs')
const notes = require('./notes.js')
const command = process.argv[2]
console.log(process.argv)
// if (command === 'add') {
//     console.log('Adding note!')
// } else if (command === 'remove') {
//     console.log('Removing note!')
// }
// Customize yargs version
yargs.version('1.1.0')
// Create add command
yargs.command( {
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        } 
    },
    // handler: function(argv) {
    //     //console.log('Adding a new note!', argv)
    //     //console.log('Title: ' + argv.title)
    //     //console.log('Body: '+ argv.body)
    //     notes.addNote(argv.title, argv.body)
    // }
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
     
})

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    // handler: function(argv) {
    //     //console.log('Removing the note!')
    //     notes.removeNotes(argv.title)
    // }
    handler(argv) {
        notes.removeNotes(argv.title)
    }
})

yargs.command( {
    command: 'list',
    describe: 'List your notes',
    // handler: function () {
    //     console.log('Listing out all note')
    // }
    handler() {
        console.log('Listing out all note')
    }
})

yargs.command( {
    command: 'read',
    describe: 'Read a note',
    // handler: function () {
    //     console.log('Reading a note')
    // }
    handler() {
        console.log('Reading a note')
    }
})

// add, remove, read, list
//console.log(yargs.argv)
yargs.parse()





