/* Turn.js
 * JavaScript file to arrange turn related things of the Cycling Holidays game
 * Made on 10-01-2016
 * by GeOdin
 *
 *=========================================================
 * This JavaScript file includes the following functions: *
 *=========================================================
 * rollDice()
 */

////////////////
// rollDice() //
////////////////

// Function to roll the dice

function rollDice() {
	// roll dice
	// toggleDice()
	// show result in storyText

 	// Roll dice and show result of dice roll
 	// Picture of dice from http://www.canstockphoto.com/lose-red-dice-5564211.html
 	// Move cycling avatar to new place
 	// Show icon of former space
 	// Show instruction/ story in #storyText
 	// Add information to #journal?
 	// Show new #locationName
 	// Show new #currentLocationTitle
 	// Adjust extent to new location (wageningen lower left and new location upper right)

 	// Return game
 	return game;

 	// There are turns until the gams is won
	while (game.won == false) {
		// Set variables 
		var gameTemp;

		// Turns for the game
		gameTemp = turn(game);
		game = gameTemp;

		// Add game.won = true after certain condition is met
		if (game.currentLocation == "STOCKHOLM") {
			game.won = true;
		}
	}

	// Add ending to game
}
