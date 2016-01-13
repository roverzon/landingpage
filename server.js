'use strict';

const express   = require('express');
const morgan    = require('morgan');
const port      = process.env.PORT || 80;
const app       = express();

app.use(morgan('dev'));
app.use(require('./controllers'));

app.listen(port,() => {
  console.log('server listening on ' +  port);
});