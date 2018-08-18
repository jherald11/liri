var Spotify = function(sKey){};
var Twitter = function(tKey){};

var env = require("dotenv").config();
var keys = require("./keys.js");
var request = require("request");
var inquirer = require("inquirer");
var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

inquirer.prompt([
    {
        name: "select_file",
        message: "Select which program you would like to search through.",
        type: "list",
        choices: ["my-tweets", "spotify-this-song", "movie-this", "do-what-it-says"]
    }
]).then(function(mainAnswer){
    if(mainAnswer.select_file === "my-tweets"){
        client.get('search/tweets', {q: 'node.js'}, function(error, tweets, response) {
            console.log(response);
        });
    }
    else if (mainAnswer.select_file === "spotify-this-song"){
        inquirer.prompt([
            {
                name: "question",
                type: "input",
                message: "What song would you like to search?"
            }
        ]).then(function(songResponse){
            if(songResponse != ""){
                spotify.get("search", {q: songResponse})
                    console.log("------------------");
                    console.log("The Artist's name is : " + JSON.stringify(body).Title);
                    console.log("The song title is: " + JSON.parse(body).Year);
                    console.log("Here is a preview link: " + JSON.parse(body).imdbRating);
                    console.log("This is the album name for the song: " + JSON.parse(body).tomatoRating);
                    console.log("------------------");
            }
            else{
                spotify.get("search", {q: "I Want It That Way"})

                        console.log("------------------");
                        console.log("The Artist's name is : " + JSON.stringify(body).Title);
                        console.log("The song title is: " + JSON.parse(body).Year);
                        console.log("Here is a preview link: " + JSON.parse(body).imdbRating);
                        console.log("This is the album name for the song: " + JSON.parse(body).tomatoRating);
                        console.log("------------------");
            };

        });
    }
    else if (mainAnswer.select_file === "movie-this"){
        inquirer.prompt([
            {
                name: "question",
                type: "input",
                message: "What movie would you like to search?"
            }
        ]).then(function(movieResponse){
            if(movieResponse != ""){
                request("http://www.omdbapi.com/?t=" + movieResponse.question + "&apikey=trilogy", function(error, response, body) {
                    if (!error && response.statusCode === 200) {
                        console.log("------------------");
                        console.log("The movie's title is : " + JSON.parse(body).Title);
                        console.log("The movie came out in: " + JSON.parse(body).Year);
                        console.log("The movie's IMDB rating is: " + JSON.parse(body).imdbRating);
                        console.log("The movie's Rotten Tomatoes rating is: " + JSON.parse(body).tomatoRating);
                        console.log("The movie was produced in: " +JSON.parse(body).Country);
                        console.log("The movie is spokin in: " + JSON.parse(body).Language);
                        console.log("The plot of the movie is: " + JSON.parse(body).Plot);
                        console.log("The cast of the movie is: " + JSON.parse(body).Actors);
                        console.log("------------------");
                    }
                    else {
                        console.log("The error is " + error);
                    };
                });
            }
            else{
                request("http://www.omdbapi.com/?t=mr+nobody&apikey=trilogy", function(error, response, body) {

                    if (!error && response.statusCode === 200) {
                        console.log("------------------");
                        console.log("The movie's title is : " + JSON.stringify(body).Title);
                        console.log("The movie came out in: " + JSON.parse(body).Year);
                        console.log("The movie's IMDB rating is: " + JSON.parse(body).imdbRating);
                        console.log("The movie's Rotten Tomatoes rating is: " + JSON.parse(body).tomatoRating);
                        console.log("The movie was produced in: " +JSON.stringify(body).Country);
                        console.log("The movie is spokin in: " + JSON.stringify(body).Language);
                        console.log("The plot of the movie is: " + JSON.stringify(body).Plot);
                        console.log("The cast of the movie is: " + JSON.stringify(body).Actors);
                        console.log("------------------");
                    }
                    else {
                        console.log("The error is " + error);
                    };

                });
            };
        });
    }
    else if (mainAnswer.select_file === "do-what-it-says"){

    }
    else {
        return console.log("How did you not make a choice?");
    };
})


