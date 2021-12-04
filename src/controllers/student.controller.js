const express = require('express');
const router = express.Router()

const Student = require('../models/student.model')

router.post('/', async (req, res) => {
    try {
      const student = await Student.create(req.body)
      res.send(student)
    } catch (e) {
      res.status(500).json({ message: e.message })
    }
  })
  
  router.get('/', async (req, res) => {
    try {
      const student = await Student.find().populate('user_id').lean().exec()
      res.send(student)
    } catch (e) {
      res.status(500).json({ message: e.message })
    }
  })

  module.exports = router ; 