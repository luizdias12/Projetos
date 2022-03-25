var express = require('express');
var router = express.Router();

/* GET application page. */
router.get('/', (req, res, next) => {
  res.render('index', {
    title: 'Welcome',
    user: undefined
  });
});

module.exports = router;