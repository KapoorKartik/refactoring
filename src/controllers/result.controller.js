const express = require('express');
const Result = require('../models/result.model')

const router = express.Router()


router.post('/', async (req, res) => {
  try {
    const result = await Result.create(req.body)
    res.send(result)
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
})

router.get('/', async (req, res) => {
  try {
    const result = await Result.find()
      .populate('eval_id')
      .populate('student_id')
      .lean()
      .exec()
    res.send(result)
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
})

//fetch all students who gave specific eval

router.get("/:id", async(req,res) => {
    try{
        const student =await Result.find({eval_id: req.params.id})
        .populate("student_id")
        .lean().exec()
        res.send(student)
    } catch (e) {
    res.status(500).json({ message: e.message })
  }
})

module.exports = router;