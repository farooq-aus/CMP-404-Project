const express = require('express')
const dotenv = require('dotenv')

dotenv.config()
const app = express()
const port = process.env.PORT || 5000

const routes = require('./routes')

app(routes)

app.listen(port, () => {
  console.log('Bin Microservice listening at http://localhost:', port)
})
