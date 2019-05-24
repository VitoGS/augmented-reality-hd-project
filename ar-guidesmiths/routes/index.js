var express = require('express');
var router = express.Router();
var users = require('../models/users');

/* GET home page. */
router.get('/login', function(req, res, next) {
  res.render('login');
});
let userEmail;
router.post('/login', function(req, res, next) {
  const { email } = req.body;
  userEmail = email;
  res.redirect('/grattitud');
});

router.get('/ar', function(req, res, next) {
  res.render('grattitud', {
    link: 'http://localhost:3000/bamboo',
    name: 'asd',
    karma: 23423,
    email: 'userEmail',
    image: 'https://avatars.slack-edge.com/2018-08-10/415353586679_16c48c3ffab07aa1056c_original.jpg',
    color: '#3bba90'
  });
  // peticion de karma y usuario
});

router.get('/grattitud', function(req, res, next) {
  users.findOne({ 'user.username': userEmail, 'organization.id': 'T2G4ZDZTK' }, (err, data) => {
    const info = JSON.parse(JSON.stringify(data));
    const { user, image, payload } = info;
    const name = payload.real_name;
    const userImage = image.image_original;
    res.render('grattitud', {
      link: 'http://localhost:3000/bamboo',
      name,
      karma: 23423,
      email: userEmail,
      image: userImage,
      color: '#3bba90'
    });
  })
  // peticion de karma y usuario
});

router.get('/bamboo', function(req, res, next) {
  res.render('bamboo', { name: 'Ismael', email: userEmail, color: '#3bba90' });
});

router.get('/logout', (req, res) => {
  userEmail = null;
  res.redirect('/login');
});

module.exports = router;
