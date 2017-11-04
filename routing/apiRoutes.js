//Path dependency for HTML
//Unsure if this dependency is needed here since it is included in the server.js file.
var path = require("path");
//Link routes to data source:
var friends = require("../app/data/friends.js");

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
	var friendInput = req.body;
	// console.log("friendInput = " + JSON.stringify(friendInput));
	res.json({ success : true });
//handle incoming survey results


//loop through friends array (already have)
for (var i = 0; i < friendsArray.length; i++) {
	friendsArray[i]
	if (friendsArray) {}
}
//insert some dummy data
//for all scores in that friend
//take the difference 


//handle the compatibility logic

	});



}



