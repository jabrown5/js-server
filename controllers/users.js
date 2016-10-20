var express = require('express');
var ctrl = express.Router();

var users = [
	{
		email: 'jamest@ga.co',
		password: 'passwd1'
	},
	{
		email: 'james.haff@ga.co',
		password: 'passwd2'
	},
	{
		email: 'yourmom@gmail.com',
		password: 'passwd3'
	}
];

function findUserbyId(id) {
	var offsetIndex = id - 1 ;
	return users[offsetIndex];
};

/* GET users listing. */
ctrl.get('/', function(req, res, next) {
  res.json(users);
});
ctrl.get('/:id', function(req, res, next) {
	// console.log(req.params);
	var id = parseInt(req.params.id);
	if (typeof id === 'number') {
		res.json(findUserbyId(id))
	}
	// console.log('ROUTE PARAMS ^^^^^^^');
	// fallback if the IF fails
	res.json({
		message: 'user not found'
	}); 
});

module.exports = ctrl;