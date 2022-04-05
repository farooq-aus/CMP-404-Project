const mongoose = require('mongoose')
const User = require('../models/User.model')

const createUser = async (userBody) => {
  return User.create(userBody)
}

const getAllUsers = async (filter) => {
  const users = await User.find(filter)
  return users
}

const getUser = async (id) => {
  return User.findOne({
    _id: mongoose.Types.ObjectId(id),
  })
}

const updateUser = async (userId, updateBody) => {
  const user = await User.findByIdAndUpdate(
    userId,
    updateBody
    // {
    //   upsert: true,
    //   new: true,
    // }
  )
  return user
}

const deleteuser = async (userId) => {
  const user = await User.findByIdAndDelete(userId)
  return user
}

module.exports = {
  createUser,
  getAllUsers,
  getUser,
  updateUser,
  deleteuser,
}
