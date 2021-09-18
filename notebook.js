const express = require('express')
const router = express.Router()
const notebookSchema = require('./notebookSchema');

//fetching all data
router.get('/', async (req, res) => {
    try {
        const notes = await notebookSchema.find();
        res.json(notes);

    } catch (err) {
        console.log(err);
    }
})

//fetching data by id
router.get('/:id', async (req, res) => {
    try {
        const notes = await notebookSchema.findById(req.params.id)
        res.json(notes)
    } catch (err) {
        res.send(err)
    }
})

//inserting data
router.post('/', async (req, res) => {
    const notes = new notebookSchema({
        note: req.body.note
    })
    try {
        const insertNote = await notes.save()
        res.json(insertNote)
    } catch (err) {
        res.send(err)
    }
})

//changing data with respect to id
router.patch('/:id', async (req, res) => {
    try {
        const notes = await notebookSchema.findById(req.params.id)
        notes.note = req.body.note
        const updateNote = await notes.save()
        res.json(updateNote)
    } catch (err) {
        res.send(err)
    }
})

//changing data with respect to id using put method
router.put('/:id', async(req,res) => {
    try {
        const notes = await notebookSchema.findById(req.params.id)
        notes.note = req.body.note
        const updateNote = await notes.save()
        res.json(updateNote)
    } catch (err) {
        res.send(err)
    }
})

//delete data with respect to id
router.delete('/:id', async (req, res) => {
    try {
        const notes = await notebookSchema.findById(req.params.id)
        const delteNote = await notes.remove()
        res.json(delteNote)
    } catch (err) {
        res.send(err)
    }
})

module.exports = router;