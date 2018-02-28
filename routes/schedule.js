
/*
 * GET home page.
 */
var data = require('../data_event.json');

exports.view = function(req, res){
	console.log(data);
  res.render('schedule', data);
  
  	
};


