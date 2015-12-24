var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/marketpanda',function(){
  console.log('mongodb connected')
});

module.exports = mongoose;