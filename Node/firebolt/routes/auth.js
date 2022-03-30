var express = require('express');
var router = express.Router();

/* GET application page. */
router.post('/', (req, res, next) => {
    let username = req.body.user_login;
    let password = req.body.pass_login;

    if( username && password ) {

    } else {    
        res.redirect('/application');
    }

});

module.exports = router;