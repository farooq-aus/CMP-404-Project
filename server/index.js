// imports
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv').config()
const router = require('./routes')

// instance
const app = express()

// middleware
app.use(cors())
app.use(express.json())

// router
app.use('/', router)

// db
mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function () {
  console.log('db connected')
})

// server
app.listen(process.env.PORT || 5000, () => {
  console.log('listening on port 5000')
})

module.exports = app
