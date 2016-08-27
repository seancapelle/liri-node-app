//Take user input for action
var action = process.argv[2];

//User input for movie-this and spotify-this-song
var parameter = process.argv[3];

//Switch to determine action to take
function doAction(action){
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
}
//my-tweets
function twitter() {

	//Get twitter node package
	var twitter = require('twitter');

	//Grab the keys.js info
	var twitterKeys = require('./keys.js').twitterKeys;

	//Set client to the grabbed key
	var client = new twitter(twitterKeys);

	//Set screen_name and number of tweets to pull
	var params = {screen_name: '@seancapelle', count: 10};

	//Get timeline info
	client.get('statuses/user_timeline', params, function(error, tweets) {
	 	
	 	//If error occurs
	 	if (error) {
		    console.log('Error occurred: ' + error);
		    return;
		}
	 	
	 	//If no error
	 	if (!error) {
		
			//Display ten current tweets, numbered 1-10
			for (var i = 0; i < tweets.length; i++) {
				console.log((parseInt([i]) + 1) + '. ' + tweets[i].text);
			}    
		}
	});

}
//spotify-this-song
function spotify() {
	
	if (parameter == null) {

		//If no song from the user, default 'the sign'
		parameter = 'the sign';
	}

	//Get spotify node package
	var spotify = require('spotify');
	 
	spotify.search({ type: 'track', query: parameter}, function(error, data) {
	    //If error occurs
	    if (error) {
	        console.log('Error occurred: ' + error);
	        return;
	    }
	 	
	 	//If no error
		if (!error) {

			//Artist name 
			var artist = data.tracks.items[0].artists[0].name;

			//Song name
			var song = data.tracks.items[0].name;

			//Spotify preview link
			var link = data.tracks.items[0].external_urls.spotify;
			
			//Album name
			var album = data.tracks.items[0].album.name
			
			//Display all the mess. ALL. THE. MESS.
			console.log(song + ", performed by " + artist + ", on the album " + album + ". Spotify: " + link);
			
			}
			
	});

}
//movie-this
function movie() {

	//Get request package
	var request = require('request');

	if(parameter == null) {
		
		//If user doesn't provide movie title
		var movieName = "Mr. Nobody";
	}
	else {

		//Assign user input to variable
		var movieName = parameter;
	}

	//Create URL based on movieName
	var queryUrl = 'http://www.omdbapi.com/?t=' + movieName + '&y=&plot=short&tomatoes=true&r=json';

	//Request
	request(queryUrl, function (error, response, data) {

		//If error occurs
		 if (error) {
	        console.log('Error occurred: ' + error);
	        return;
	    }
		//If no error
		if (!error && response.statusCode == 200) {

			//Parse the data
			var grabData = JSON.parse(data);
			console.log(grabData.Title + " (" + grabData.Year + "), Rated: " + grabData.Rated + ". Filmed in: " + grabData.Country + ". Language: " + grabData.Language + 
				". Plot: " + grabData.Plot + " Starring: " + grabData.Actors + ". Rotten Tomatoes Rating: " + grabData.tomatoUserMeter + ", Rotten Tomatoes URL: " + grabData.tomatoURL);
		}
	});
}

//do-what-it-says
function doIt() {

	//Get fs
	var fs = require('fs');

	//Stores the contents of the reading inside the var "data"
	fs.readFile("random.txt", "utf8", function(error, data) {
	var split = data.split(',');

	//assign to user input
	action = split[0];
	parameter = split[1];

	doAction(action);

	})

}

//Start the process
doAction(action);

