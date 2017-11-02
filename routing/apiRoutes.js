//Path dependency for HTML
//Unsure if this dependency is needed here since it is included in the server.js file.
var path = require("path");
//Link routes to data source:
var friends = require("/data/friends.js");

//GET requests for api routes:
module.exports = function(app) {
	//GET route to 
	app.get("/api/friends", function(req, res){
		res.json(friends);
	});
//POST route to handle incoming survey results.
	//**also**
		//Handle the compatility logic.
	app.post("/api/friends", function(req, res) {
	console.log(req.body);
	});



}



