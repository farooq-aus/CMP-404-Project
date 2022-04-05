const express = require('express')
const collectorRoute = require('./collector.routes')
const binRoute = require('./bin.routes')
const userRoute = require('./user.routes')

const router = express.Router()

const routes = [
  {
    path: '/collector',
    route: collectorRoute,
  },
  {
    path: '/bin',
    route: binRoute,
  },
  {
    path: '/user',
    route: userRoute,
  }
]

routes.forEach((route) => {
  router.use(route.path, route.route)
})

module.exports = router
