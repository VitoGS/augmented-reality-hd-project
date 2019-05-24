var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/login', function(req, res, next) {
  res.render('login');
});

router.post('/login', function(req, res, next) {
  const { email } = req.body;
  req.session.email = email;
  res.redirect('/bamboo');
});

router.get('/grattitud', function(req, res, next) {
  const { email } = req.session || {};
  // peticion de karma y usuario
  res.render('grattitud', {
    link: 'http://localhost:3000/bamboo',
    name: 'Ismael',
    karma: 23423,
    email,
    color: '#3bba90'
  });
});

router.get('/bamboo', function(req, res, next) {
  const { email } = req.session;
  res.render('bamboo', { name: 'Ismael', email, color: '#3bba90' });
});

router.get('/logout', (req, res) => {
  req.session.email = null;
  res.redirect('/login');
});

module.exports = router;
