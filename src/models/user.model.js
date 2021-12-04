const {Schema , model} = require("mongoose")


const userSchema = new Schema(
    {
      first_name: { type: String, required: true },
      last_name: { type: String, required: true },
      gender: { type: String, required: false, default: 'Male' },
      age: { type: Number, required: false, default: 20 },
    },
    {
      versionKey: false,
    },
  )
  
  module.exports = model('user', userSchema)