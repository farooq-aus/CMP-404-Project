const mongoose = require('mongoose')
const Admin = require('../models/Admin_User.model').adminModel

const createAdmin = async (userBody) => {
  return Admin.create(adminBody)
}

const getAllAdmins = async (filter) => {
  const admins = await Admin.find(filter)
  return admins
}

const getAdmin = async (id) => {
  return Admin.findOne({
    _id: mongoose.Types.ObjectId(id),
  })
}

const updateAdmin = async (adminId, updateBody) => {
  const admin = await Admin.findByIdAndUpdate(
    adminId,
    updateBody
    // {
    //   upsert: true,
    //   new: true,
    // }
  )
  return admin
}

const deleteAdmin = async (adminId) => {
  const admin = await Admin.findByIdAndDelete(adminId)
  return admin
}

module.exports = {
  createAdmin,
  getAllAdmins,
  getAdmin,
  updateAdmin,
  deleteAdmin,
}
