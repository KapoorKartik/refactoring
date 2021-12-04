const express = require('express');

const User = require('../models/user.model')
const Result = require('../models/result.model')


const router = express.Router();


router.get("/" , async (req,res) =>{

    try {
    const results = await Result.find({})
    .sort({marks : -1})
    .populate('student_id')
    .lean().exec()
    // console.log(results[0])
    // console.log(results[0].student_id.user_id)
    const user_id = results[0].student_id.user_id
  
    const user = await User.find({_id : user_id})
    // console.log(user[0])
  
    results[0].student_id.user_id = user[0]
  
    // console.log('final object',results[0])
    res.send(results[0])
  }catch(e){
    res.status(500).json({ message: e.message })
  }
  
  })

  module.exports = router;