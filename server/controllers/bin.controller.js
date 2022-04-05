const binService = require('../services/bin.service')

const createBin = async (req, res) => {
  try {
    await binService.createBin(req.body)

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
    const bins = await binService.findBins({})
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
    const bin = await binService.getBinById(req.params.binId)
    if (!bin) throw new Error('Could not find Bin with _id ' + req.params.binId)
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
    const bin = await binService.updateBinById(req.params.binId, req.body)
    res.status(200).json(bin)
  } catch (e) {
    res.status(409).json({
      ok: false,
      message: e.message,
    })
  }
}

const deleteBin = async (req, res) => {
  try {
    await binService.deleteBinById(req.params.binId)
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
