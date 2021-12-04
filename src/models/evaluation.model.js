const {Schema , model } = require("mongoose");

const evalSchema = new Schema(
    {
      date: { type: String, required: true },
      instructor: { 
          type: Schema.Types.ObjectId,
          ref : "user",
          required: true 
          },
      topic: { type: String, required: true },
    },
    {
      versionKey: false,
    },
  )
  
  module.exports = model('evaluation', evalSchema)