const express = require('express');
const router = express.Router();
const Fighter = require('../models').Fighter;

router.get('/', async function(req, res) {
  try{
    const fighters = await Fighter.findAll();
    return res.status(200).json(fighters)
  }catch(error){
    return res.status(404).json(error)
  }
});
router.get('/:id', async function(req, res) {
  const id  = body.params.id
  try{
    const fighter = await Fighter.findOne(req.body.fighter);
    return res.status(200).json({ success:true, fighter: fighter })
  }catch(error){
    return res.status(404).json(error)
  }
});
router.put('/:id', async function(req, res) {
  const id  = body.params.id
  try{
    const fighter = await Fighter.update(id, req.body);
    return res.status(200).json({ success:true, message: "Fighter was successfully updated" })
  }catch(error){
    return res.status(404).json(error)
  }
});
router.post('/', async function(req, res) {
  try{
    const fighter = await Fighter.create(req.body.data);
    return res.status(200).json(fighter)
  }catch(error){
    return res.status(500).json(error)
  }
});

module.exports = router;
