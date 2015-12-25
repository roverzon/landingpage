const router = require('express').Router();
const Job = require('../../models/job');

router.post('/',function(req,res){
  console.log(req.body);
});


module.exports = Job; 