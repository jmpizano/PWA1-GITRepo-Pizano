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


    //initiate round
    var round=0;

    function fight(){
        alert(playerOneName+":"+playerOneHealth+"  *START*  "+playerTwoName+":"+playerTwoHealth);
        for (var i = 0; i < 10; i++)
        {
            //random formula is - Math.floor(Math.random() * (max - min) + min);
            var minDamage1 = player1Damage * .5;
            var minDamage2 = player2Damage * .5;
            var f1 = Math.floor(Math.random()*(player1Damage-minDamage1)+minDamage1);
            var f2 = Math.floor(Math.random()*(player2Damage-minDamage2)+minDamage2);

            //inflict damage
            playerOneHealth-=f1;
            playerTwoHealth-=f2;

            console.log(playerOneName+": "+playerOneHealth + " " + playerTwoName+":"+playerTwoHealth);

