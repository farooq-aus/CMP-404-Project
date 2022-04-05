const express = require('express')
const collectorController = require('../controllers/collector.controller')

const router = express.Router()

router.route('/').get(collectorController.getAllCollectors).post(collectorController.createCollector)

router
  .route('/:collectorId')
  .get(collectorController.getCollector)
  .put(collectorController.updateCollector)
  .delete(collectorController.deleteCollector)

module.exports = router
