var mongoose = require('mongoose')
const collectorservice = require('../services/collector.service')

const createCollector = async (req, res) => {
  try {
    await collectorservice.createCollector(req.body)

    res.status(201).json({
      ok: true,
      message: 'Collector created',
    })
  } catch (e) {
    res.status(409).json({
      ok: false,
      message: e.message,
    })
  }
}

const getAllCollectors = async (req, res) => {
  try {
    const collectors = await collectorservice.getAllCollectors({})
    res.status(200).json(collectors)
  } catch (e) {
    res.status(404).json({
      ok: false,
      message: e.message,
    })
  }
}

const getCollector = async (req, res) => {
  try {
    const collector = await collectorservice.getCollector(req.params.collectorId)
    res.status(200).json(collector)
  } catch (e) {
    res.status(409).json({
      ok: false,
      message: e.message,
    })
  }
}

const updateCollector = async (req, res) => {
  try {
    await collectorservice.updateCollector(req.params.collectorId, req.body)
    res.status(200).json({
      ok: true,
      message: 'Collector updated',
    })
  } catch (e) {
    res.status(409).json({
      ok: false,
      message: e.message,
    })
  }
}

const deleteCollector = async (req, res) => {
  try {
    await collectorservice.deleteCollector({ _id: req.params.collectorId })
    res.status(200).json({
      ok: true,
      message: 'Collector deleted',
    })
  } catch (e) {
    res.status(409).json({
      ok: false,
      message: e.message,
    })
  }
}

module.exports = {
  createCollector,
  getAllCollectors,
  getCollector,
  updateCollector,
  deleteCollector,
}
