var mongoose = require('mongoose')
const userservice = require('../services/user.service')

const createUser = async (req, res) => {
  try {
    await userservice.createUser(req.body)

    res.status(201).json({
      ok: true,
      message: 'user created',
    })
  } catch (e) {
    res.status(409).json({
      ok: false,
      message: e.message,
    })
  }
}

const getAllUsers = async (req, res) => {
  try {
    const users = await userservice.getAllUsers({})
    res.status(200).json(users)
  } catch (e) {
    res.status(404).json({
      ok: false,
      message: e.message,
    })
  }
}

const getUser = async (req, res) => {
  try {
      console.log(req.params.userId)
    const user = await userservice.getUser(req.params.userId)
    res.status(200).json(user)
  } catch (e) {
    res.status(409).json({
      ok: false,
      message: e.message,
    })
  }
}

const updateuser = async (req, res) => {
  try {
    await userservice.updateuser(req.params.userId, req.body)
    res.status(200).json({
      ok: true,
      message: 'User updated',
    })
  } catch (e) {
    res.status(409).json({
      ok: false,
      message: e.message,
    })
  }
}

const deleteuser = async (req, res) => {
  try {
    await userservice.deleteuser({ _id: req.params.userId })
    res.status(200).json({
      ok: true,
      message: 'User deleted',
    })
  } catch (e) {
    res.status(409).json({
      ok: false,
      message: e.message,
    })
  }
}

module.exports = {
  createUser,
  getAllUsers,
  getUser,
  updateuser,
  deleteuser,
}
