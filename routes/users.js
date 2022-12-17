var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

	setInterval( function setup() {
    console.log("test777s");
	}, 1000)


module.exports = router;
