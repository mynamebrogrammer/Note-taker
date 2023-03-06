const express = require('express');

const notesRouter = require('./routes/notesRouter');

const app = express();

app.use('/notes', notesRouter);

module.exports = app;