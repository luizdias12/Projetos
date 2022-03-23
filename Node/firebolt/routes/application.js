var express = require('express');
var router = express.Router();

/* GET application page. */
router.get('/', function(req, res, next) {
  res.render('application', {title: 'Application'});
});

module.exports = router;