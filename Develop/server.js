const express = require('express');

const db = require('./db/db.json');
const port = process.env.PORT || 3001;

const app = express();

app.use(express.static('public'));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// GET route for retrieving all notes
app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, './Develop/public/notes.html')));

// GET route for Landing page
app.get('*', (req, res) => res.sendFile(path.join(__dirname, './Develop/public/index.html')));

















app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});


// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();

});

