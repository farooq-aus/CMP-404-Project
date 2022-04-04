const express = require('express')
const binController = require('../controllers/bin.controller')

const router = express.Router()

router.route('/').get(binController.getBins).post(binController.createBin)

router
  .route('/:userId')
  .get(binController.getBin)
  .put(binController.updateBin)
  .delete(binController.deleteBin)

module.exports = router
