const plugin = require('fastify-plugin')
const mongodb = require('fastify-mongodb')
const dotenv = require('dotenv').config()

async function dbConnector(fastify) {
  fastify.register(mongodb, {
    url: `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@farooqs-cluster.csfv2.mongodb.net/SalusUsers?retryWrites=true&w=majority`,
  })
}

module.exports = dbConnector
