const express = require('express');
const router = express.Router();
const Fight = require('../models').Fight;

router.post('/', async function(req, res, next) {
  try{
    const fight = await Fight.create(req.body.fight);
    return res.status(200).json({ success:true, message: "Fight was successfully created" })
  }catch(error){
    return res.status(500).json(error)
  }
});

module.exports = router;
