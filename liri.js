var keys = require('./keys')

switch(BLANK) {
	case my-tweets:
		twitter();
		break;
	case spotify-this-song:
		spotify();
		break;
	case movie-this:
		movie();
		break
	case do-what-it-says:
		request();
		break;
	default:
		console.log("default");
		break;
}




//Use Case for the requests on step 5


// function movieThis(){
// 	var url = '';

// 	request(url, function(error, response, body)) {

// 		if(!error && response.statusCode == 200) {
// 			console.log("Movie");
// 			JSON.parse
// 		}
// 	}
// }

// INSTRUCTIONS:
// Level 1: Take any movie with a word title (ex: Cinderella) as a Node argument and retrieve the year it was created
// Level 2 (More Challenging): Take a move with multiple words (ex: Forrest Gump) as a Node argument and retrive the year it was created. 
// ----------------------------------------------------------------------------------

// ... are the places where you need to code!

// Include the request npm package (Don't forget to run "npm install request" in this folder first!)
// ...
var request = require('request');

// Grab or assemble the movie name  and store it in a variable called "movieName"
// ...
var movieName = process.argv[2];


// Then run a request to the OMDB API with the movie specified 
var queryUrl = 'http://www.omdbapi.com/?t=' + movieName +'&y=&plot=short&r=json';

// This line is just to help us debug against the actual URL.  
console.log(queryUrl);


// Then create a request to the queryUrl
// ...
request(queryUrl, function (error, response, data) {

	// If the request was successful...
	if (!error && response.statusCode == 200) {

		// Then log the body from the site!

		var grabData = JSON.parse(data);
		console.log(grabData.Title + " (" + grabData.Rated + "), Released in: " + grabData.Year)
	}
});
	
	// If the request is successful
	// ... 

	// Then log the Release Year for the movie
	// ...