var router     = require('express').Router();
var morgan     = require('morgan');
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
router.use(require('./static'));

module.exports = router