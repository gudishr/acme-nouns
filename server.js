const express = require('express')
const app = express()
const db = require('./db')
const { People, Places, Things } = db.models

const port = process.env.port || 3000

app.get('/api/people', (req, res, next) => {
  People.findAll()
    .then( people => res.send(people))
    .catch(next)
})


db.syncAndSeed()
  .then(() => {
    app.listen(port, () => console.log(`listening on port ${port}`))
  })