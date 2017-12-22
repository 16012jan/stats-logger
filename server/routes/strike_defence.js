const express = require('express');
const router = express.Router();
const StrikeDefence = require('../models').Round_Action_Strike_Defence;

router.post('/', async function(req, res, next) {
  try{
    const strike_defence = await StrikeDefence.create({ fight_id: 1, fighter_id: 1000, ...req.body.data });
    return res.status(200).json(strike_defence)
  }catch(error){
    return res.status(500).json({message: "An error was occure. Please try again later"})
  }
})
router.delete('/:id', async function(req, res) {
  try{
    const strike_defence = await StrikeDefence.findById(req.params.id)
    if(strike_defence) {
      const result = await strike_defence.destroy()
      return res.status(200).json(result)
    }
  }catch(error){
    return res.status(500).json(error)
  }
})
router.put('/:id', async function(req, res) {
  try {
    const strike_defence = await StrikeDefence.findById(req.params.id)
    const result = await strike_defence.updateAttributes(req.body.data)
    return res.status(200).json(result)
  }catch(error){
      return res.status(500).json(error)
  }
})
module.exports = router;
