var express = require('express');
var router = express.Router();
/* GET home page. */




/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express', username: req.user?.username});
// });





/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', username: req.user?.username});
});

module.exports = router;

