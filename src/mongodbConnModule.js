var mongoose = require('mongoose');

module.exports.connect = function() {
	mongoose.connect('mongodb://jq:6266921@ds237770.mlab.com:37770/atlasai');
	var db = mongoose.connection;
	db.on("error", console.error.bind(console, "connection error"));
	db.once("open", function(callback){
	  console.log("Connection Succeeded");
	});
	return db;
}
