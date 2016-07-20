var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/fish', function(req, res, next){
  res.send('blub blub blub said the fish');
});



module.exports = router;
