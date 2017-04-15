var express = require('express');
var router = express.Router();
var register = require('../controllers/register');

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.json("hai")
});

router.post('/', function(req, res, next) {
	console.log(req.body);
  register.loginUser(req,res);
});

module.exports = router;
