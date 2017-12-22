const express = require('express');
const router = express.Router();
const GrappleDefence = require('../models').Round_Action_Grapple_Defence

router.post('/', async function(req, res, next) {
  try{
    const grapple_defence = await GrappleDefence.create({ fight_id: 1, fighter_id: 1000, ...req.body.data });
    return res.status(200).json(grapple_defence)
  }catch(error){
    return res.status(500).json(error)
  }
})
router.delete('/:id', async function(req, res) {
  try{
    const grapple_defence = await GrappleDefence.findById(req.params.id)
    if(grapple_defence) {
      const result = await grapple_defence.destroy()
      return res.status(200).json(result)
    }
  }catch(error){
    return res.status(500).json(error)
  }
})
router.put('/:id', async function(req, res) {
  try{
    const grapple_defence = await GrappleDefence.findById(req.params.id)
    const result = await grapple_defence.updateAttributes(req.body.data);
    return res.status(200).json(result)
  }catch(error){
    return res.status(500).json(error)
  }
})

module.exports = router;
