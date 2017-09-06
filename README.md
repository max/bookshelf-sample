# Bookshelf

A sample app with a Postgres backing-service.

## Local Setup

```bash
$ echo "PORT=3000" >> .env
$ echo "DATABASE_URL=postgres://localhost/bookshelf" >> .env
$ npm install
$ npm run migrate-up
$ npm run seed
$ npm run dev
```
