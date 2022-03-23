var express = require('express');
var router = express.Router();

/* GET application page. */
router.get('/', (req, res, next) => {
  res.render('application', {
    title: 'Application',
    value1: 50,
    value2: 80
  });
});

module.exports = router;