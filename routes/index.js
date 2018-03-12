var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/testRoute', function(req, res, next) {
    res.render('newtemplate', { newText: 'New routing text' });
});

module.exports = router;
