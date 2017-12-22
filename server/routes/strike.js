const express = require('express');
const router = express.Router();
const uuidv4 = require('uuid/v4');
const Strike = require('../models').Round_Action_Strike;

router.post('/', async function(req, res) {
  try{
    const strike = await Strike.create({ fight_id: 1, fighter_id: 1000, ...req.body.data });
    return res.status(200).json(strike)
  }catch(error){
    return res.status(500).json(error)
  }
});

router.delete('/:id', async function(req, res) {
  try{
    const strike = await Strike.findById(req.params.id)
    if(strike) {
      const result = await strike.destroy()
      return res.status(200).json(result)
    }
  }catch(error){
    return res.status(500).json(error)
  }
})

router.put('/:id', async function(req, res) {
  try {
    const strike = await Strike.findById(req.params.id)
    const result = await strike.updateAttributes(req.body.data)
    return res.status(200).json(result)
  }catch(error){
      return res.status(500).json(error)
  }
})

module.exports = router;
