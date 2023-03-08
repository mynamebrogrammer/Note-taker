const allNotes = require('express').Router();
const { readFromFile, readAndAppend, writeToFile } = require('../helpers/fsUtils');
const { v4: uuidv4 } = require('uuid');
const { query } = require('express');

// GET route for retrieving all notes
allNotes.get('/', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

// POST route for a new note
allNotes.post('/', (req, res) => {
    console.log(req.body);

    const { title, text } = req.body;

    if (req.body) {
        const newNote = {
            title,
            text,
            note_id: uuidv4(),
        };

        readAndAppend(newNote, './db/db.json');
        res.json(`Note added successfully 🚀`);
    } else {
        res.error('Error in adding note');
    }
});

allNotes.put('/', (req, res) => {
    console.log(req.body);

    const { title, text } = req.body;

    if (req.body) {
        const newNote = {
            title,
            text,
            note_id: uuidv4(),
        };

        readAndAppend(newNote, './db/db.json');
        res.json(`Note added successfully 🚀`);
    } else {
        res.error('Error in adding note');
    }
});

// DELETE route for a specific note
allNotes.delete('/:id', (req, res) => {
    const noteId = req.params.id;
    console.log(noteId);
    readFromFile('./db/db.json').then((data) => {
        const allNotes = JSON.parse(data);
        const newNotes = allNotes.filter((note) => note.id !== noteId);
        writeToFile('./db/db.json', newNotes);
        res.json(`Note ${noteId} has been deleted 🗑️`);
    });
});
module.exports = allNotes;