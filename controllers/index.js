const router     = require('express').Router();
const morgan     = require('morgan');
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.use(require('./static'));

router.use('/api/accounts',require('./api/accounts'));
router.use('/api/jobs',require('./api/jobs'));

module.exports = router;