var express = require('express');
var router = express.Router();
var users = require('../models/users');
var karma = require('../models/karma');

/* GET home page. */
router.get('/login', function(req, res, next) {
  res.render('login');
});

router.get('/grattitud', function(req, res, next) {
  const { email } = req.query;
  karma.findOne({
    '_id.email': email,
    '_id.orgId': 'T2G4ZDZTK',
  }, (err, dataKarma) => {
    if(err || dataKarma == null) return res.redirect('/login')
    const karma = JSON.parse(JSON.stringify(dataKarma));
    const { score } = karma;
    users.findOne({ 'user.username': email, 'organization.id': 'T2G4ZDZTK' }, (err, data) => {
      if(err || data == null) return res.redirect('/login')
      const info = JSON.parse(JSON.stringify(data));
      const { user, payload } = info;
      const name = payload.real_name;
      res.render('grattitud', {
        name,
        karma: score,
        email,
        color: '#363543'
      });
    });
  })
  // peticion de karma y usuario
});

module.exports = router;
