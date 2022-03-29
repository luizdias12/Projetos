var express = require('express');
var router = express.Router();

/* GET application page. */
router.post('/', (req, res, next) => {
    let username = req.body.user_login;
    let password = req.body.pass_login;

    if( username && password ) {

    } else {    
        // res.redirect('/application');
        console.log(criaAlert('danger', true, "fa-solid fa-triangle-exclamation", 'teste'));    
    }

});

module.exports = router;