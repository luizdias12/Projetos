var express = require('express');
var router = express.Router();
var ip = require('ip');

/* GET application page. */
router.post('/', (req, res, next) => {
    let username = req.body.username;

    if (username) {
        console.log(req.body)
        res.render('chat', {
            title: 'Chat',
            name: username,
            ipaddr: ip.address()
        })
    }
});

module.exports = router;