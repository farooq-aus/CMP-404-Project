const mongoose = require('mongoose')
const Collector = require('../models/Collector.model')

const createCollector = async (collectorBody) => {
  return Collector.create(collectorBody)
}

const getAllCollectors = async (filter) => {
  const collectors = await Collector.find(filter)
  return collectors
}

const getCollector = async (id) => {
  return Collector.findOne({
    _id: mongoose.Types.ObjectId(id),
  })
}

const updateCollector = async (collectorId, updateBody) => {
  const collector = await Collector.findByIdAndUpdate(
    collectorId,
    updateBody
    // {
    //   upsert: true,
    //   new: true,
    // }
  )
  return collector
}

const deleteCollector = async (collectorId) => {
  const collector = await Collector.findByIdAndDelete(collectorId)
  return collector
}

module.exports = {
  createCollector,
  getAllCollectors,
  getCollector,
  updateCollector,
  deleteCollector,
}
