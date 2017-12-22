const express = require('express');
const router = express.Router();
const RoundTimes = require('../models/round_times')

router.post('/', async function(req, res, next) {
  try{
    const round_time = await RoundTimes.create(req.body.round_time);
    return res.status(200).json({ success:true, message: "Fighter was successfully created" })
  }catch(error){
    return res.status(500).json(error)
  }
});

module.exports = router;
