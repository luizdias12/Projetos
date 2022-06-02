var express = require('express');
var router = express.Router();

/* GET application page. */
router.get('/', (req, res, next) => {
    res.render('home', {
        title: 'Home'
    });
});

module.exports = router;