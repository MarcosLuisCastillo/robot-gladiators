// Game States
//"WIN" - Player robot has defeated all enemy-robots
// * Fight all enemy-robots


var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
console.log(enemyNames.length);
for(var i = 0; i < enemyNames.length; i++) {
    console.log(enemyNames[i]);
    console.log(enemyNames[0]);
    console.log(enemyNames[1]);
    console.log(enemyNames[2]);
    console.log(enemyNames[3]);
    console.log(i);
    console.log(enemyNames[i] + " is at " + i + " index");
}
var enemyHealth = 50;
var enemyAttack = 12;
var enemyMoney = 10

var fight = function(enemyName) {
  window.alert("Welcome to Robot Gladiators!");
};

var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

var fight = function() {
    // Alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");
  
    //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
  
    // Log a resulting message to the console so we know that it worked.
  
    // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
  
    // Log a resulting message to the console so we know that it worked.
  };

  // Subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that result to update the value in the 'enemyHealth variable
  enemyHealth = enemyHealth - playerAttack;

  // Log a resulting message to the console so we know that it worked.
  console.log(
  playerName + " attacked " + enemyNames + ". " + enemyNames + " now has " + enemyHealth + " health remaining."
  );

  // SUbtract the value of 'enemyAttack' from the value of 'playerHealth' and use that result to update the value in the 'playerHealth' variable
  playerHealth = playerHealth - enemyAttack;

  //Log a resulting message to the console so we know that it worked.
  console.log(
      enemyNames + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
  );

 // if player choses to fight, then fight
 if (promptFight === "fight" || promptFight === "FIGHT") {
     //remove enemy's health by subtracting the amount set in the playerAttack variable
     enemyHealth = enemyHealth - playerAttack;
  console.log(
      playerName + " attacked " + enemyNames + ". " + enemyNames + " now has " + enemyHealth + " health remaining."
  );

  // check enemy's health
  if (enemyHealth <=0) {
      window.alert(enemyNames + " has died! ");
  } else{
      window.alert(enemyNames + " still has " + enemyHealth + " health left.");
  }

  // remove player's health by subtracting the amount set in the enemyAttack variable.
  playerHealth = playerHealth - enemyAttack;
  console.log(
      enemyNames + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
      );

  // check player's health
  if (playerHealth <=0) {
      window.alert(playerName + " has died!");
  } else { 
      window.alert(playerName + " still has " + playerHealth + " health left.");
  }

} else if (promptFight === "skip" || promptFight === "SKIP") {
    // confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    // if yes (true), leave fight
    if (confirmSkip) {
        window.alert(playerName = " has decided to skip this fight. Hasta la vista, baby!");
        // subtract money from playerMoney for skipping 
        playerMoney = playerMoney -2;
    }
    // if no (false), ask question again bu running fight() again
    else { 
       for(var i = 0; i < enemyNames.length; i++) {}
        fight(enemyNames[i]);
    }
}