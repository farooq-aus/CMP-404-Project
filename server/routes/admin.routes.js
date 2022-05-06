const express = require('express')
const adminController = require('../controllers/admin.controller')

const router = express.Router()

router
  .route('/')
  .get(adminController.getAllAdmins)
  .post(adminController.createAdmin)

router
  .route('/:userId')
  .get(adminController.getAdmin)
  .put(adminController.updateAdmin)
  .delete(adminController.deleteAdmin)

module.exports = router
