var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/fruit', function(req, res, next) {
  res.send('I am yummy, I say squish');
});

module.exports = router;
