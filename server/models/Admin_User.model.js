const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
  {
    // _id: MongoID // to differentiate between collectors
    f_name: String, // first name
    l_name: String, // last name
    password: String, // password
  },
  (options = { discriminatorKey: 'user_type' })
)

const User = mongoose.model('User', userSchema)

const adminDiscriminator = User.discriminator('Admin', {})

module.exports = {
  adminModel: mongoose.model('Admin'),
  userModel: mongoose.model('User'),
}
