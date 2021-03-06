var fs = require("fs"); // new
const {
  createNewNote,
  validateNote,
  deleteNote,
  updateId,
  getNotes,
} = require("../../lib/notes");
const router = require("express").Router();

router.get("/notes", (req, res) => {
  let note = getNotes();

  res.json(note.notes);
});

router.post("/notes", (req, res) => {
  // if (!validateNote(req.body.note)) {

  //     res.status(400).send('The note is not properly formatted.');

  // } else {

  const note = createNewNote(req.body.note);

  res.json(note);

  // }
});

router.delete("/notes/:id", (req, res) => {
  const params = req.params.id;

  const note = deleteNote(params);

  console.log(note);

  res.json(note);
});

module.exports = router;
