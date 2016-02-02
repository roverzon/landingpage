const db       = require('../db');
const Schema   = db.Schema;
const AccountSchema  = new Schema({
    name    : { type : String,  required : true},
    email   : { type : String,  required : true},
    company : { type : String,  required : true},
    phone   : { type : String , required : true}
  });

module.exports = db.model('Account',AccountSchema);