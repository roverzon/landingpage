'use strict';
var express = require('express');
var path    = require('path');
var router  = express.Router();

router.use(express.static( path.join(__dirname , '/../public')) );
router.use(express.static( path.join(__dirname , '/../bower_components')) );
router.use(express.static( path.join(__dirname , '/../views')));
router.use(express.static( path.join(__dirname , '/../assets')));

router.get('/',function(req,res){
  res.sendFile( path.join(__dirname + '/../layout/layout.html'));
});

module.exports = router;