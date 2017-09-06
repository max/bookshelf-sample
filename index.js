const express = require('express')
const model = require('./lib/model.js')

const app = express()

// Set Content-Type for all responses
app.use((req, res, next) => {
  res.set('Content-Type', 'application/json')
  next()
})

// Get a list of books
app.use(async (req, res) => {
  const books = await model.list(10)
  res.end(JSON.stringify(books.rows))
})

app.listen(8080)

const server = app.listen(process.env.PORT || 3000, err => {
  if (err) return console.error(err)
  const port = server.address().port;
  console.log(`App listening on port ${port}`)
})
