require('dotenv').config()
const express = require('express')
const cors = require('cors')
const Note = require('./models/note')


// Express middlewares etc.

const app = express()

const requestLogger = (request, response, next) => {
    console.log('HTTP request received:')
    console.log('Method:', request.method)
    console.log('Path:  ', request.path)
    console.log('Body:  ', request.body)
    console.log('---')
    next()
}

const unknownEndpoint = (req, res) => {
    res.status(404).json({
        error: 'unknown endpoint'
    })
}

app.use(express.static('build'))
app.use(express.json())
app.use(cors())
app.use(requestLogger)


// Routes

app.get('/', (req, res) => {
    res.send('<h1>Hello world</h1>')
})

// GET all notes
app.get('/api/notes', (req, res) => {
    Note.find({}).then(notes => {
        console.log('All notes:', notes)
        res.json(notes)
    })
})

// GET single note
app.get('/api/notes/:id', (req, res) => {
    Note.findById(req.params.id).then(note => res.json(note))
})

// DELETE
app.delete('/api/notes/:id', (req, res) => {
    const id = Number(req.params.id)
    notes = notes.filter(note => note.id !== id)

    console.log(`DELETE: notes/${id}`)
    res.status(204).end()
})

// POST
app.post('/api/notes', (req, res) => {

    const body = req.body

    if (!body.content) {
        return res.status(400).json({
            error: 'content missing'
        })
    }

    const note = new Note({
        content: body.content,
        date: new Date().toISOString(),
        important: body.important || false
    })

    note.save().then(savedNote => {
        console.log('Note saved.')
        res.json(savedNote)
    })
})

app.use(unknownEndpoint)

// Start server

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})