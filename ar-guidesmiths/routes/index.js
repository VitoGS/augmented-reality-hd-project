var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/ar', function(req, res, next) {
  res.render('ar', {
    name: 'Ismael',
    karma: 23423,
    email: 'ismael.bakkali@guidesmiths.com',
    color: '#3bba90'
  });
});

router.get('/login', function(req, res, next) {
  res.render('login');
});

router.get('/grattitud', function(req, res, next) {
  res.render('grattitud', {
    link: 'http://localhost:3000/bamboo'
  });
});

router.get('/bamboo', function(req, res, next) {
  res.render('bamboo', {
    link: 'http://localhost:3000/grattitud'
  });
});

module.exports = router;
