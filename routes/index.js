var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Maxwell Stern | Web Development & Design' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Maxwell Stern | Contact' });
});

module.exports = router;
