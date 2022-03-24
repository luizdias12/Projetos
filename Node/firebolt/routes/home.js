var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  console.log('HomePage - ' + new Date());
  res.render('home', { 
    title: 'Home',
    nome: 'Luiz Dias da Silva da Junior',
    matricula: '310272'
  });
});

module.exports = router;
