const fs = require('fs');
const path = require('path');

function validateNote(note) {
    if (!note.title || typeof note.title !== 'string') {
        console.log('fail 1');
        return false;
    }
    if (!note.text || typeof note.text !== 'string') {
        console.log('fail 2');
        return false;
    }
    return true;
}

function updateId(notesArray) {

    let i = 0;

    let updatedNotes = []

    notesArray.forEach((note) => {
        note.id = i.toString();
        i++
        updatedNotes.push(note);
    })

    // console.log(updatedNotes);

    return updatedNotes;

}

const createNewNote = (newNote, notesArray) => {

    const updatedNotes = updateId(notesArray);

    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: updatedNotes }, null, 2)
    );
    return updatedNotes;
};

const deleteNote = (id,notesArray) => {

    notes = [];


    // console.log("============================")
    // // console.log("params", params[0]);
    // // console.log(notesArray);

    // // const param = parseInt(params);

    // const id = params[0];

    // // console.log(id);

    // // console.log("delete", param);


    // // const updatedNotes = notesArray.filter(notes => notes.id !== params);

    // const updatedNotes = notesArray.filter((note) => {
    //     // return note.id !== params;
    //     return note.id !== id;
    // });

    // console.log("updatedNotes", updatedNotes);

    notesArray.filter((note) => { 
        if (note.id !== id){
            notes.push(note)
        } 
    });

    const updatedNotes = updateId(notes);

    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: updatedNotes }, null, 2)
    );

    // console.log("updatedNotes", updatedNotes);

    return updatedNotes;

};



module.exports = { createNewNote, validateNote, deleteNote, updateId };