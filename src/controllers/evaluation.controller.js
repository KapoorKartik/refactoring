const express = require('express');
const router = express.Router()

const Eval = require('../models/evaluation.model')


router.post('/', async (req, res) => {
    try {
      const eval = await Eval.create(req.body)
      res.send(eval)
    } catch (e) {
      res.status(500).json({ message: e.message })
    }
  })
  
  router.get('/', async (req, res) => {
    try {
      const eval = await Eval.find().populate("instructor").lean().exec()
      res.send(eval)
    } catch (e) {
      res.status(500).json({ message: e.message })
    }
  })
  
  router.delete('/:id', async (req, res) => {
      try {
        const eval = await Eval.findByIdAndDelete(req.params.id)
        .lean().exec()
  
        res.send(eval)
      } catch (e) {
        res.status(500).json({ message: e.message })
      }
    });

    
    module.exports = router;