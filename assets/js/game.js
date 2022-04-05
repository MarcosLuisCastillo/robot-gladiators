// Game States
//"WIN" - Player robot has defeated all enemy-robots
// * Fight all enemy-robots



var randomNumber = function(40, 60) {
  
  var value = Math.floor(Math.random() * (21)) + 40;
  
  var playerInfo = {
    name: window.prompt("What is your robot's name?"),
    health: 100, 
    attack: 10, 
    money: 10

    reset: function() {
      this.health = 100;
      this.money = 10;
      this.attack = 10;
    }, // comma!
    refillHealth: function() {
        if (this.money >= 7) {
          window.alert("Refilling player's health by 20 for 7 dollars.");
          this.health += 20;
          this.money -= 7;
    }, // comma!
    
    else {
        window.alert("You don't have enough money!");
    }
  }
    
    upgrade.Attack: function() {
      if (this.money >= 7) {
      window.alert("Upgrading player's attack by 6 for 7 dollars.");
      this.attack += 6;
      this.money -= 7;
    }
    
    else {
      window.alert("You don't have enough money!");
    }

  };
  
  var enemyInfo = [
    {
      name: "Roborto",
      attack: randomNumber(10,14)
    },
    {
      name: "Amy Android",
      attack: randomNumber(10, 14)
    },
    {
      name: "Robo Trumble"
      attack: randomNumber(10, 14)
    }
  ];
  return value;
};

var startGame = function() { 
    for (var i = 0; i < enemyInfo.length; i++)
        // reset player stats
        playerInfo.health = 100;
        playerInfo.attack = 10;
        playerInfo.money = 10
        enemyHealth = randomNumber(40, 60);
        enemyAttack = 12;
        enemyMoney = 10

  // other logic remains the same...
};

  // function to end the entire game
  var endGame = function() {
      if (playerInfo.health > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".");
      }
  
      else {
        window.alert("You've lost your robot in battle.");
      }
        // ask player if they'd like to play again
      var playAgainConfirm = window.confirm("Would you like to play again?");

      if (playAgainConfirm) {
          // restart the game 
      startGame();
      }

      else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
      }
  
        window.alert("The game has now ended. Let's see how you did!");
  };
    for(var i = 0; i < enemyInfo.length; i++) {
      if (playerInfo.health > 0) {
          window.alert("Welcome to Robot Gladiators! Round " + ( i + 1 ) );
      }
      
      else {
          window.alert("You have lost your robot in battle! Game Over!");
          break;
    };
    
    var pickedEnemyObj = enemyInfo[i];
          pickedEnemyObj.health = randomNumber(40, 60);

    fight (pickedEnemyObj);
  }


    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    var fight = function(enemy) {
      console.log(enemy);
        while (playerInfo.health > 0 && enemy.health > 0) {
          // ask player if they'd like to fight or run
          var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');
      
            // if player picks "skip" confirm and then stop the loop
            if (promptFight === "skip" || promptFight === "SKIP") {
              // confirm player wants to skip
              var confirmSkip = window.confirm("Are you sure you'd like to quit?");
            }
              // if yes (true), leave fight
              if (confirmSkip) {
                window.alert(playerInfo.name + ' has decided to skip this fight. Goodbye!');
                // subtract money from playerMoney for skipping
                playerInfo.money = playerInfo.money - 10;
                console.log("playerMoney", playerInfo.money)
              break;
            }
        
      
              // remove enemy's health by subtracting the amount set in the playerAttack variable
              // generate random damage value based on player's attack power
            var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
      
                enemy.health = Math.max(0, enemy.health - damage);
                console.log(
                playerInfo.name + ' attacked ' + enemy.name + '. ' + enemy.name + ' now has ' + enemy.health + ' health remaining.'
            );
      
                // check enemy's health
              if (enemyHealth <= 0) {
                window.alert(enemy.name + ' has died!');
      
                // award player money for winning
              playerInfo.money = (Math.max(0, playerInfo.money - 10);
               
              // leave while() loop since enemy is dead
                break;
              } else {
              window.alert(enemy.name + ' still has ' + enemy.health + ' health left.');
              }
      
                // remove players's health by subtracting the amount set in the enemyAttack variable
              playerInfo.health = Math.max(0, playerInfo.health - enemy.attack);
                console.log(
                enemy.name + ' attacked ' + playerInfo.name + '. ' + playerInfo.name + ' now has ' + playerInfo.health + ' health remaining.'
              );
      
          // check player's health
          if (playerInfo.health <= 0) {
            window.alert(playerInfo.name + ' has died!');
            // leave while() loop if player is dead
            break;
          } else {
            window.alert(playerInfo.name + ' still has ' + playerInfo.health + ' health left.');
          }
        } // end of while loop
      }; // end of fight function
      
      
      var shop = function() {
          // ask player what they'd like to do
        var shopOptionPrompt = window.prompt(
          "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
        );
      };
      
      switch (shopOptionPrompt) {
        case "REFILL": // new case
        case "refill":
          playerInfo.refillHealth();
          if (playerInfo.money >= 7) {
            window.alert("Refilling player's health by 20 for 7 dollars.");
      
            playerInfo.health = playerInfo.health + 20;
            playerInfo.money = playerInfo.money - 7;
          }
          else {
            window.alert("You don't have enough money!");
          }
      
          break;
        case "UPGRADE": // new case
        case "upgrade":
          playerInfo.upgradeAttack();
          if (playerMoney >= 7) {
            window.alert("Upgrading player's attack by 6 for 7 dollars.");
      
            playerAttack = playerAttack + 6;
            playerMoney = playerMoney - 7;
          }
          else {
            window.alert("You don't have enough money!");
          }
      
          break;
        case "LEAVE": // new case
        case "leave":
          window.alert("Leaving the store.");
          break;
        default:
          window.alert("You did not pick a valid option. Try again.");
          shop();
          break;
      }
      // if player is still alive and we're not at the last enemy in the array
        if (playerHealth > 0 && i < enemyNames.length - 1) {
            // ask if player wants to use the store before next round
            var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
      
            // if yes, take them to the store() function
            if (storeConfirm) {
              shop();
            }
        };
     
  //play again
  startGame();


