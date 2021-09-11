const fs = require("fs");
const path = require("path");

const getNotes = () => {
  let noteArr = fs.readFileSync(path.join(__dirname, "../db/db.json"), "utf8");
  return JSON.parse(noteArr);
};

function validateNote(note) {
  if (!note.title || typeof note.title !== "string") {
    console.log("fail 1");
    return false;
  }
  if (!note.text || typeof note.text !== "string") {
    console.log("fail 2");
    return false;
  }
  return true;
}

function updateId(notesArray) {
  let i = 0;

  let updatedNotes = [];

  notesArray.forEach((note) => {
    note.id = i.toString();
    i++;
    updatedNotes.push(note);
  });

  return updatedNotes;
}

const createNewNote = (newNote, notesArray) => {
  notesArray.push(newNote);

  const updatedNotes = updateId(notesArray);

  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify({ notes: updatedNotes }, null, 2)
  );
  return updatedNotes;
};

const deleteNote = (id, notesArray) => {
  notes = [];

  notesArray.filter((note) => {
    if (note.id !== id) {
      notes.push(note);
    }
  });

  const updatedNotes = updateId(notes);

  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify({ notes: updatedNotes }, null, 2)
  );

  return updatedNotes;
};

module.exports = {
  createNewNote,
  validateNote,
  deleteNote,
  updateId,
  getNotes,
};
