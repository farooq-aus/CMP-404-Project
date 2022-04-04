var mongoose = require('mongoose')
const Bin = require('../models/Bin.model')

const createBin = async (req, res) => {
  try {
    await Bin.create(req.body)

    res.status(201).json({
      ok: true,
      message: 'Bin created',
    })
  } catch (e) {
    res.status(409).json({
      ok: false,
      message: e.message,
    })
  }
}

const getBins = async (req, res) => {
  try {
    const bins = await Bin.find({})
    res.status(200).json(bins)
  } catch (e) {
    res.status(404).json({
      ok: false,
      message: e.message,
    })
  }
}

const getBin = async (req, res) => {
  try {
    const bin = await Bin.findOne({
      _id: mongoose.Types.ObjectId(req.params.userId),
    })
    res.status(200).json(bin)
  } catch (e) {
    res.status(409).json({
      ok: false,
      message: e.message,
    })
  }
}

const updateBin = async (req, res) => {
  try {
    await Bin.findByIdAndUpdate(req.params.userId, req.body)
    res.status(200).json({
      ok: true,
      message: 'Bin updated',
    })
  } catch (e) {
    res.status(409).json({
      ok: false,
      message: e.message,
    })
  }
}

const deleteBin = async (req, res) => {
  try {
    await Bin.findOneAndDelete({ _id: req.params.userId })
    res.status(200).json({
      ok: true,
      message: 'Bin deleted',
    })
  } catch (e) {
    res.status(409).json({
      ok: false,
      message: e.message,
    })
  }
}

module.exports = {
  createBin,
  getBins,
  getBin,
  updateBin,
  deleteBin,
}
