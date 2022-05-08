const mongoose = require('mongoose')
const Bin = require('../models/Bin.model')

const createBin = async (binBody) => {
  return Bin.create(binBody)
}

const findBins = async (filter) => {
  const bins = await Bin.find(filter)
  return bins
}

const getBinById = async (id) => {
  return Bin.findOne({
    _id: mongoose.Types.ObjectId(id),
  })
}

const updateBinById = async (binId, updateBody) => {
  let bin = await Bin.findByIdAndUpdate(
    binId,
    updateBody
    // {
    //   upsert: true,
    //   new: true,
    // }
  )
  bin = await getBinById(binId)
  return bin
}

const deleteBinById = async (binId) => {
  const bin = await Bin.findByIdAndDelete(binId)
  return bin
}

module.exports = {
  createBin,
  findBins,
  getBinById,
  updateBinById,
  deleteBinById,
}
