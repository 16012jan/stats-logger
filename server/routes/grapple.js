const express = require('express');
const router = express.Router();
const Grapple = require('../models').Round_Action_Grapple;

router.post('/', async function(req, res, next) {
  try{
    const grapple = await Grapple.create({ fight_id: 1, fighter_id: 1000, ...req.body.data });
    return res.status(200).json(grapple)
  }catch(error){
    return res.status(500).json(error)
  }
})
router.delete('/:id', async function(req, res) {
  try{
    const grapple = await Grapple.findById(req.params.id)
    if(grapple) {
      const result = await grapple.destroy()
      return res.status(200).json(result)
    }
  }catch(error){
    return res.status(500).json(error)
  }
})
router.put('/:id', async function(req, res, next) {
  try{
    const grapple = await Grapple.findById(req.params.id)
    const result = await grapple.updateAttributes(req.body.data);
    return res.status(200).json(result)
  }catch(error){
    return res.status(500).json(error)
  }
})

module.exports = router;
