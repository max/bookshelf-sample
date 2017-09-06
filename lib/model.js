const db = require('./db.js')

function list(limit) {
  return db.query(`SELECT * FROM BOOKS LIMIT $1`, [limit])
}

function create (data) {
  let d = [data.title, data.description]
  return db.query(`INSERT INTO books(title, description) VALUES($1, $2)`, d)
}

module.exports = { list, create }
