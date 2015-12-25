const Account = require('../../models/account');
const router  = require('express').Router();

router.post('/',function(req,res){
    Account.findOne({
        name : req.body.name
    },function(err, account){
        if ( account ) {
            return res.json("account is exist!");
        } else {
            var account = new Account(req.body);
            return account.save(function(err,account){
                if (err) {
                    return err;
                } else {
                    return res.json(account);
                };
            });
        };
    }); 
});

module.exports = router;
