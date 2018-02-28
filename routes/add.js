
/*
 * GET home page.
 */
var data = require('../data_location.json');
exports.addLocation = function(req, res){
	console.log('la');
	var newLocation = {
		"name": req.query.name,
	};
	//var weather = {
	//	"name": req.query.name,
	//}; 

	data.locations.push(newLocation);
	res.render('add', data);
   
}
