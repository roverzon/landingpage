const router = require('express').Router();
const path   = require('path');

router.get('/',function(req,res){
  // res.sendFile( path.join(__dirname + '/../../views/common/404.html'));
  res.redirect('/')
});


module.exports = router;