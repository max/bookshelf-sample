#!/usr/bin/env node

const model = require('../lib/model.js')

const books = [
  { title: 'Hello' },
  { title: 'World' },
  { title: 'Foo' },
  { title: 'Bar' },
  { title: 'Beep' },
  { title: 'Boop' }
]

Promise
  .all(books.map(b => model.create(b)))
  .then(r => console.log('Database seeded successfully'))
  .catch(e => console.error(e))
