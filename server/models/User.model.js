const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  // _id: MongoID // to differentiate between collectors
  f_name: String, // first name
  l_name: String, // last name
  password: String, // password

})

module.exports = mongoose.model('User', userSchema)
