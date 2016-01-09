/* StartGame.js
 * JavaScript file to arrange the start of the Cycling Holidays game
 * Made on 09-01-2016
 * by GeOdin
 *
 *=========================================================
 * This JavaScript file includes the following functions: *
 *=========================================================
 * startGame()
 * setLatLon(startingVariables)
 * drawMap(game)
 * createMarkers(map)
 */

 /////////////////
 // startGame() //
 /////////////////

 // Function to start the Cycling Holidays game and set the start variables

 function startGame() {
	// Set the variables
	var locationName = "WAGENINGEN"; // "" for later versions
	// Create game object
	var game = new Object();
	// Create the startingVariables object
	var startingVariables = new Object();

	// Add the starting location
	startingVariables.locationName = "WAGENINGEN";
	setLatLon(startingVariables);

	// Add the startingVariables to the game object
	game.startingVariables = startingVariables;

	// Draw the map
	game = drawMap(game);

	// Return the game object
	return game;
 }

//////////////////////////////////
// setLatLon(startingVariables) //
//////////////////////////////////

// Function to set the coordinates for initiating the drawing of the map

function setLatLon(startingVariables) {
	// Set the variables
	var startLocations = [
		["Location Name", "Latitude", "Longitude", "Zoom Level"],
		["WAGENINGEN", 51.9665156, 5.6603056, 13]
	];

	startingVariables.lat = startLocations[1][1];
	startingVariables.lon = startLocations[1][2];
	startingVariables.zoomLevel = startLocations[1][3];

	// Return the startingVariables object
 	return startingVariables;
}

///////////////////
// drawMap(game) //
///////////////////

// Function to draw the map

function drawMap(game) {

	// Create the map
	var map = new google.maps.Map(document.getElementById("map"), {
		zoom: game.startingVariables.zoomLevel,
		center: new google.maps.LatLng(game.startingVariables.lat, game.startingVariables.lon),
		mapTypeId: google.maps.MapTypeId.TERRAIN
	});
	// Add the map to the game object
	game.startingVariables.map = map;

	// Create the markers
	var markers = createMarkers(game);

	// Add the markers to the game object
	game.startingVariables.markers = markers;

	// Show the map
	document.getElementById("map").style.display = "block";

	// Return the game object
	return game;
}

/////////////////////////
// createMarkers(game) //
/////////////////////////

// Function to create the markers

function createMarkers(game) {
	// Create an object to store the markers in
	var markers = new Object();

	// Create the markers and store them in the markers object
	for (i = 1; i < locations.length; i++) {
		var locationName = locations[i][1];
		var locationLat = locations[i][2];
		var locationLon = locations[i][3];
		var locationImg = locations[i][6];

		// Create the markers
		var coords = new google.maps.LatLng(locationLat, locationLon);
		markers[locationName] = new google.maps.Marker({
		    position: coords, 
		    title: locationName,
		    icon: locationImg
		});

		// Add the marker to the map
		markers[locationName].setMap(game.startingVariables.map);
	}

	//Return the game object
	return markers;
}
