
/*
 * GET home page.
 */
var data_loc = require('../data_location.json');
var data_sch = require('../data_schedule.json');

exports.view = function(req, res){
	console.log(data_sch);
	var pendingData = {"events": data_sch.events, "locations": data_loc.locations};

    res.render('newLocation', pendingData);
};
