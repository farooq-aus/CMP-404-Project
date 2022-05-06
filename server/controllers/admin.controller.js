let mongoose = require('mongoose')
const adminService = require('../services/admin.service')

const createAdmin = async (req, res) => {
  try {
    await adminService.createAdmin(req.body)

    res.status(201).json({
      ok: true,
      message: 'Admin created',
    })
  } catch (e) {
    res.status(409).json({
      ok: false,
      message: e.message,
    })
  }
}

const getAllAdmins = async (req, res) => {
  try {
    const admins = await adminService.getAllAdmins({})
    res.status(200).json(admins)
  } catch (e) {
    res.status(404).json({
      ok: false,
      message: e.message,
    })
  }
}

const getAdmin = async (req, res) => {
  try {
    console.log(req.params.adminId)
    const admin = await adminService.getAdmin(req.params.adminId)
    res.status(200).json(admin)
  } catch (e) {
    res.status(409).json({
      ok: false,
      message: e.message,
    })
  }
}

const updateAdmin = async (req, res) => {
  try {
    await adminService.updateAdmin(req.params.adminId, req.body)
    res.status(200).json({
      ok: true,
      message: 'Admin updated',
    })
  } catch (e) {
    res.status(409).json({
      ok: false,
      message: e.message,
    })
  }
}

const deleteAdmin = async (req, res) => {
  try {
    await adminService.deleteAdmin({ _id: req.params.adminId })
    res.status(200).json({
      ok: true,
      message: 'Admin deleted',
    })
  } catch (e) {
    res.status(409).json({
      ok: false,
      message: e.message,
    })
  }
}

module.exports = {
  createAdmin,
  getAllAdmins,
  getAdmin,
  updateAdmin,
  deleteAdmin,
}
