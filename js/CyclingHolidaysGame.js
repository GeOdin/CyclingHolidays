/* CyclingHolidaysGame.js
 * JavaScript file for the Cycling Holidays browser game
 * Made on 09-01-2016
 * by GeOdin
 *
 *==============================================
 * This JavaScript file included to do things: *
 *==============================================
 * General
 * CyclingHolidays.html
 * stylesheet_CyclingHolidays.css
 * StartGame.js
 * CyclingHolidaysGame.js
 * Locations.js
 *
 *=========================================================
 * This JavaScript file includes the following functions: *
 *=========================================================
 * cyclingHolidaysGame()
 */

////////////////////////////
// To do (general things) //
////////////////////////////

/*
 ===========
 * General *
 ===========
 * Add Player.js?
 * * And include player info (also on webpage?)
 * * * Money
 * * * Cycling gear
 * * * amount of food
 * Add Story.js?
 * Goal of the game
 * * getting from Wageningen (the Netherlands) to Stockholm (Sweden)
 * * doing this in 30 days?
 * Features
 * * sound? (pop rock)
 * * short cut to reach destination faster, but with the change of making things last longer
 * * visiting big cities
 * * visiting small cities
 * * visiting overlook (/scenic overlook/ observation point/ lookout/ viewpoint/ viewing point/ vista point) (Dutch: uitkijkpunten)
 * * adjust extent on start and furthest point reached (in case the player is set back a couple of spaces)
 * * bicycle with transparent background as avatar (/marker?) to show where the player is located?
 * * markers on visited spots (and only there, not on current spot (only after rolling dice))
 * * multiple players?
 * More information about cycling holidays/ bike tours:
 * * Cyling gear?
 * * Food (local food?)
 * Create bicycle favicon (png with 15 px height and width)

//////////////////////////////////
////// CyclingHolidays.html //////
//////////////////////////////////

////////////////////////////////////////////
////// stylesheet_CyclingHolidays.css //////
////////////////////////////////////////////

//////////////////////////
////// StartGame.js //////
//////////////////////////

////////////////////////////////////
////// CyclingHolidaysGame.js //////
////////////////////////////////////

//////////////////
// Locations.js // // Create 30 locations that can be used as spaces
//////////////////

 * Attributes of spaces:
 * * Number (number of space)
 * * Location
 * * Kind of location (big city? small city?)
 * * Name (or only name for big ans small cities?)
 * * Image (for marker)
 * * Instruction (what to do on this space)
 * Big cities
 * * Locations (Name, coordinates)
 * * * Hamburg - 53.5586526, 9.6476381
 * * * Stockholm - 59.3261917, 17.7073664
 * * * Bremen - 53.1201147, 8.4561021
 * * * Kopenhagen - 55.6713812, 12.4207554
 * * * Norrköping - 58.5867668, 16.0441716 //Norrkoping te prevent mistakes with the umlaut (Dutch: umlaut)
 * * Marker
 * * * https://mapicons.mapsmarker.com/markers/tourism/place-to-see/big-city/?custom_color=b4afb8
 * * * #B4AFB8
 * * Able to buy (ingame)
 * * * Cycling gear
 * * * (local?) food
 * Small cities
 * * Locations (Name, coordinates)
 * * * Wageningen - 51.9685459, 5.6651142 (zoom 13 (or 14))
 * * * Zutphen - 52.1294073, 6.1379134
 * * * Nordhorn - 52.44371, 6.9610262
 * * * Zeven - 53.284152, 9.1176404
 * * * Vislanda - 56.7858912, 14.4475538
 * * Marker
 * * * https://mapicons.mapsmarker.com/markers/tourism/place-to-see/small-city/
 * * * #67C547
 * * Able to buy (ingame)
 * * * (local?) food
 * Overlooks
 * * Marker
 * * * https://mapicons.mapsmarker.com/markers/tourism/place-to-see/panoramic-view/?custom_color=88c0eb
 * * * #88C0EB
 * Player
 * * Marker
 * * * https://mapicons.mapsmarker.com/markers/sports/cycling/mountain-biking/?custom_color=db1818
 * * * #DB1818

 * * internet!
 * Later versions
 * * Add option to choose starting location and ending location

*/

///////////////////////////
// cyclingHolidaysGame() //
///////////////////////////

// Function for the Cycling Holidays game

function cyclingHolidaysGame() {
	// Create the starting variables
	gameTemp = startGame();
}
