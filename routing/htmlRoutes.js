//Path dependency for HTML
//Unsure if this dependency is needed here since it is included in the server.js file.
var path = require("path");


//GET requests for html:
module.exports = function(app) {

	//GET route to survey.html page.
	app.get("/survey", function(req, res) {
		res.sendFile(path.join(__dirname, "../homework/friendfinder/app/public/survey.html"));
	});
	//GET route to home.html page.
	app.get("/home", function(req, res) {
		res.sendFile(path.join(__dirname, "../homework/friendfinder/app/public/home.html"));
	});
}