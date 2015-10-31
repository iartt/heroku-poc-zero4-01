var express = require('express');
var router = express.Router();

/* GET home page. */
router.get(['/', 'index'], function(req, res, next) {
  res.render('index04');
});

router.get('/left-sidebar', function(req, res, next) {
  res.render('left-sidebar');
});

router.get('/right-sidebar', function(req, res, next) {
  res.render('right-sidebar');
});

router.get('/no-sidebar', function(req, res, next) {
  res.render('no-sidebar');
});

module.exports = router;
