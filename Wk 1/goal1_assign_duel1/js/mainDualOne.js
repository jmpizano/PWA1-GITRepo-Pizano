/**
 * Created by JP on 5/9/15.
 */
//Name: Jeremiah Pizano
//Date: May 9, 2015
//Class: PWA 1

/* Create variables for player's name, health and damage.
Create variable for the round number

Create a fight FOR function to keep track of rounds fought and the players health
in the function also write code to inflict random damage to both characters per round.
IF round limit exceeds 10 rounds break

Create FOR function to check if there is a winner
IF Both player's heath are below 1, print no one wins
ELSE IF player one's health is below 1 print "Player two wins"
ELSE IF player two's health is below 1 print "Player one wins"
return results

 */

(function(){

    console.log("FIGHT!!!");

    //player name
    var playerOneName = "Spiderman";
    var playerTwoName = "Batman";

    //player damage
    var player1Damage = 20;
    var player2Damage = 20;

    //player health
    var playerOneHealth = 100;
    var playerTwoHealth = 100;
