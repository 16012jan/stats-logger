const express = require('express');
const router = express.Router();
const Event = require('../models/event')

router.post('/', async function(req, res, next) {
  try{
    const event = await Event.create(req.body.event);
    return res.status(200).json({ success:true })
  }catch(error){
    return res.status(500).json(error)
  }
});

module.exports = router;
