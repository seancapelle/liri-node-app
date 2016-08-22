//Grab the keys.js info
var keys = require('./keys')

//Take user input to determine what to do
var action = process.argv[2];

//User input
var parameter = process.argv[3];

//Switch to determine action to take
switch(action) {
	case 'my-tweets':
		twitter();
		break;
	case 'spotify-this-song':
		spotify();
		break;
	case 'movie-this':
		movie();
		break;
	case 'do-what-it-says':
		doIt();
		break;
	default:
		console.log("Enter 'my-tweets', 'spotify-this-song', 'movie-this', or 'do-what-it-says'");
}


//my-tweets
function twitter() {

	console.log("In Twitter");

	var twitter = require('twitter');

		var params = {screen_name: 'nodejs'};
		client.get('statuses/user_timeline', params, function(error, tweets, response) {
	 		  if (error) {
		        console.log('Error occurred: ' + error);
		        return;
		    }
	 		 if (!error) {
			    
				console.log(tweets);
			}
	});

}
//spotify-this-song
function spotify() {

	console.log("In Spotify");

	var spotify = require('spotify');
	 
	spotify.search({ type: 'track', query: parameter}, function(error, data) {
	    if (error) {
	        console.log('Error occurred: ' + error);
	        return;
	    }
	 
		if (!error) {
			console.log(songName);

			// Artist(s)
			// The song's name
			// A preview link of the song from Spotify
			// The album that the song is from
			// if no song is provided then your program will default to

			// "The Sign" by Ace of Base

		}
	});

}
//movie-this
function movie() {

	console.log("In Movie");

		// var request = require('request');
		// request('http://www.google.com', function (error, response, body) {
		//   if (!error && response.statusCode == 200) {
		//     console.log(body) // Show the HTML for the Google homepage. 
		//   }
		// })

	var request = require('request');

	var movieName = parameter.split(" ").join('+');

	console.log(movieName);

	var queryUrl = 'http://www.omdbapi.com/?t=' + movieName + '&y=&plot=short&tomatoes=true&r=json';

	console.log(queryUrl);

	request(queryUrl, function (error, response, data) {

		 if (error) {
	        console.log('Error occurred: ' + error);
	        return;
	    }
		// If the request was successful...
		if (!error && response.statusCode == 200) {

			var grabData = JSON.parse(data);
			console.log(grabData.Title + " (" + grabData.Year + "), Rated: " + grabData.Rated + grabData.Country + grabData.Language + grabData.Plot + grabData.Actors + grabData.tomatoUserMeter + grabData.tomatoURL);
		}
	});

}

//do-what-it-says
function doIt() {

	Console.log("In doIt");

	var fs = require('fs');

	//Stores the contents of the reading inside the var "data"
	fs.readFile("random.txt", "utf8", function(error, data) {

	//Print the contents of data
	console.log(data);

	//spotify(data);?
	})

}


//NOTES
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

