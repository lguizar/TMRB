
/*
 * GET home page.
 */
var data = require('../data_schedule.json');

exports.view = function(req, res){
	console.log(data);
    res.render('newSchedule', data);
};
