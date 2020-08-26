require('dotenv').config()
const express = require('express')
const cors = require('cors')
const Note = require('./models/note')

const app = express()

// Express middlewares etc.


const requestLogger = (request, response, next) => {
    console.log('HTTP request received:')
    console.log('Method:', request.method)
    console.log('Path:  ', request.path)
    console.log('Body:  ', request.body)
    console.log('---')
    next()
}

const errorHandler = (err, req, res, next) => {
    console.log(err)

    if (err.name === 'CastError'){
        return res.status(400).send({error: 'malformatted id'})
    }

    next(err)
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
app.get('/api/notes', (req, res, next) => {
    Note.find({})
    .then(notes => {
        console.log('All notes:', notes)
        res.json(notes)
    })
    // transfer error handling to middleware
    .catch(err => next(err))
})

// GET single note
app.get('/api/notes/:id', (req, res, next) => {
    Note.findById(req.params.id)
    .then(note => {
        if (note) {
            return res.json(note)
        } else {
            return res.status(404).end()
        }
    })
    .catch(err => next(err))
})

// DELETE
app.delete('/api/notes/:id', (req, res, next) => {
    Note.findByIdAndRemove(req.params.id)
    .then(result => res.status(204).end())
    .catch(err => next(err))
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
app.use(errorHandler)

// Start server

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})