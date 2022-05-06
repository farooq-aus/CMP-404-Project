const mongoose = require('mongoose')
const User = require('./Admin_User.model').userModel

const collectorDiscriminator = User.discriminator(
  'Collector',
  new mongoose.Schema({
    status: String, // inactive / busy
    last_location: {
      // last known location of collector
      // stored as a JSON object
      coord: [Number], // coordinates of the collector
      name: String, // location name
    },
  })
)

module.exports = mongoose.model('Collector')

// const mongoose = require('mongoose')

// const collectorSchema = new mongoose.Schema({
//   // _id: MongoID // to differentiate between collectors
//   f_name: String, // first name
//   l_name: String, // last name
//   password: String, // password
//   status: String, // inactive / busy
//   last_location: {
//     // last known location of collector
//     // stored as a JSON object
//     coord: [Number], // coordinates of the collector
//     name: String, // location name
//   },
// })

// module.exports = mongoose.model('Collector', collectorSchema)
