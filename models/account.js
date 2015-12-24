var db       = require('../db');
var Schema   = db.Schema;
var AccountSchema  = new Schema({
    email : { type : String, required : true }

  });

module.exports = db.model('Account',AccountSchema);