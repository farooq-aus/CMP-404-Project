const mongoose = require('mongoose')

const binSchema = new mongoose.Schema({
  // id: MongoID // to differentiate between bins
  last_collection_date: Date,
  bin_type: String, // recyclable / non-recyclable
  accumulation_status: Number, // percentage of waste accumulated
  location: {
    // stored as a JSON object
    coord: [Number], // coordinates of the bin
    name: String, // location name
  },
})

module.exports = mongoose.model('Bin', binSchema)
