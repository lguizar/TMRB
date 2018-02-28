var data = require("../name.json");

exports.addName = function(req, res)
 {
   console.log('la');
   var newName = {
     "name":req.query.name,
   };

   data.name.push(newName);
   res.render('addName', data)
}
