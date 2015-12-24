var account = require('../../models/account');
var router  = require('express').Router();


router.post('/',function(req,res){
  res.json(req.body);
});

module.exports = router;

