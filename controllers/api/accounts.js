const Account = require('../../models/account');
const router  = require('express').Router();


router.post('/',function(req,res){
    console.log(req.body)
    
    // var account = new Account(req.body);
    // return account.save(function(err,account){
    //     if (err) {
    //       return err
    //     } else {
    //       return res.json(account);
    //     };
    // }); 
    // 
    return res.json(req.body)
});

module.exports = router;

