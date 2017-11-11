var express = require('express');
var router = express();
var burger = require('../models/burger.js');
	
	// Get burgers from database 
router.get('/', function(req, res){
	burger.all(function(data){
		var burgObj = {
			burgers: data
		};
	res.render("index", burgObj);
	});
  });
	// Create new burger
router.post('/', function(req, res){
	burger.create(req.body.burger, function(data){
		res.redirect('/');
 });
});
	// Update burger as devoured
router.put('/api/burgers/:id', function(req, res){
	burger.update(req.params.id, function(result){
		if (result.changedRows == 0) {
			return res.status(404).end();
		} else {
			res.status(200).end();
		 }
  });
});

module.exports = router;