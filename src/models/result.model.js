const {Schema , model } = require("mongoose");

const resultSchema = new Schema(
    {
      eval_id: {
        type: Schema.Types.ObjectId,
        ref: 'evaluation',
        required: true,
      },
      student_id: {
        type: Schema.Types.ObjectId,
        ref: 'student',
        required: true,
      },
      marks : {type : Number , required: true},
    },
    {
      versionKey: false,
    },
  )
  module.exports = model('result', resultSchema)