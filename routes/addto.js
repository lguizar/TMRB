
/*
 * GET home page.
 */
var data = require('../data_event.json');

exports.addEvent = function(req, res){
	console.log("data",data);
	var newEvent = {
		"name": req.query.name,
		"time": req.query.time,
		"location": req.query.location
	};
	console.log(newEvent);
	data.events.push(newEvent);
	//res.render('add_e', data);

	res.render('addto', data);

}
