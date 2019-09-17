const express = require('express')
const app = express()
const db = require('./db')
const { People, Places, Things } = db.models
const path = require('path')

const port = process.env.port || 3000

app.get('/', (req, res, next) =>{
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.get('/api/people', (req, res, next) => {
  People.findAll()
    .then( people => res.send(people))
    .catch(next)
})

app.get('/api/places', (req, res, next) => {
  Places.findAll()
    .then( places => res.send(places))
    .catch(next)
})

app.get('/api/things', (req, res, next) => {
  Things.findAll()
    .then( things => res.send(things))
    .catch(next)
})


db.syncAndSeed()
  .then(() => {
    app.listen(port, () => console.log(`listening on port ${port}`))
  })