var express = require('express');
var app = express();
var router = express.Router();

/* GET application page. */
router.post('/', (req, res, next) => {
    let username = req.body.username;

    if( username ) {
        app.locals.name = req.body.username;
        res.redirect('/chat')
    }
});

module.exports = router;