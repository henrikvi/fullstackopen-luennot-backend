const express = require('express')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())

const requestLogger = (request, response, next) => {
    console.log('Method:', request.method)
    console.log('Path:  ', request.path)
    console.log('Body:  ', request.body)
    console.log('---')
    next()
  }

app.use(requestLogger)

let notes = [
    {
      id: 1,
      content: "HTML is easy",
      date: "2020-01-10T17:30:31.098Z",
      important: true
    },
    {
      id: 2,
      content: "Browser can execute only Javascript",
      date: "2020-01-10T18:39:34.091Z",
      important: false
    },
    {
      id: 3,
      content: "GET and POST are the most important methods of HTTP protocol",
      date: "2020-01-10T19:20:14.298Z",
      important: true
    }
  ]

const generateId = () => {
    const maxId = notes.length > 0
        ? Math.max(...notes.map(note => note.id))
        : 0
    return maxId + 1
}

app.get('/', (req, res) => {
    res.send('<h1>Hello world</h1>')
})

// GET all notes
app.get('/api/notes', (req, res) => {
    console.log('All notes:', notes)
    res.json(notes)
})

// GET single note
app.get('/api/notes/:id', (req, res) => {
    const id = Number(req.params.id)
    const note = notes.find(note => note.id === id)

    if (note) {
        console.log(`GET: notes/${note.id}`)
        res.json(note)
    } else {
        console.log(`GET: 404 notes/${id}`)
        res.status(404).end()
    }
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

    const note = {
        id: generateId(),
        content: body.content,
        date: new Date().toISOString(),
        important: body.important || false
    }
    console.log(note)

    notes = notes.concat(note)
    res.json(note)
})

const unknownEndpoint = (req, res) => {
    res.status(404).json({ error: 'unknown endpoint' })
}
app.use(unknownEndpoint)

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})