var fs = require('fs'); // new
const { createNewNote, validateNote, deleteNote, updateId } = require('../../lib/notes');
// const notes = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));
const { notes } = require('../../db/db.json');
const router = require('express').Router();

router.get('/notes', (req, res) => {
    // console.log(notes);

    
    
    // var users = JSON.parse(fs.readFileSync('../user-list.json', 'utf8'));
    // res.render('Webpage', {
    //     title: 'Express' ,
    //     user : users.user
    // });
    
    // let results = updateId(notes);

    // console.log("RENDERED NOTES", test);

    // console.log(notes);

    res.json(notes);
    // res.json(notes);
    
});

router.post('/notes', (req, res) => {
    // req.body is where our incoming content will be
    // console.log(req.body);

    // set id based on what the next index of the array will be
    // req.body.id = notes.length.toString();

    // if any data in req.body is incorrect, send 400 error back

    if (!validateNote(req.body.note)) {

        res.status(400).send('The note is not properly formatted.');

    } else {

        // console.log("current notes", req.body.currentNotes);

        const note = createNewNote(req.body.note, req.body.currentNotes);
        
        console.log("the returned notes", note);

        res.json(note);

    }
});

// Delete a candidate
router.delete('/notes/:id', (req, res) => {
    const params = req.params.id;

    // console.log("id", req.params.id);

    // console.log("currentNotes", req.body.currentNotes);

    const note = deleteNote(params, req.body.currentNotes);

    // console.log("Notes", note);

    res.json(note);

   
    
});

module.exports = router;