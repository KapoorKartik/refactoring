const mongoose = require("mongoose")

module.exports = () => {
    return mongoose.connect(
      'mongodb+srv://kapoorkartik:2jhAiBXJCU26Lg4@cluster0.lkd0p.mongodb.net/mvc?retryWrites=true&w=majority',
    )
  }