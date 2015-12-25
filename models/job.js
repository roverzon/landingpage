const db       = require('../db');
const Schema   = db.Schema;
const Job  = new Schema({
    name  : {
      first : { type : String, required : true },
      last  : { type : String, required : true }
    },
    phone : { type : Number, required : true},
    title : { type : String, required : true}
  });

module.exports = db.model('Job',Job);
