const express = require("express");
const path = require("path");

const api = require("./Develop/routes/index.js");

const port = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/api", api);

app.use(express.static("Develop/public"));

// GET route for Landing page
app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "./Develop/public/index.html"))
);

// GET route for notes page
app.get("/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "./Develop/public/notes.html"))
);

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port} 🚀`);
});
