const express = require('express')
const mysql = require('mysql')

const app = express()

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'express_authentication'
})

db.connect((error) => {
  if (error) console.error()
  else console.log('mysql connected')
})

app.get('/', (req, res) => res.send('<h1>Home page</h1>'))

app.listen(3000, () => console.log('listening'))