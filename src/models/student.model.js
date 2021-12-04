const {Schema , model } = require("mongoose");

const studentSchema = new Schema(
    {
      roll_id: { type: String, required: true },
      batch: { type: String, required: true },
      user_id: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: true,
        unique: true,
      },
    },
    {
      versionKey: false,
    },
  )
  module.exports = model('student', studentSchema)