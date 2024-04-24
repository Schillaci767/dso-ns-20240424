/*
Implement a pokemon battle system

1. Present user w/ 3 random pokemon to choose from
  - Assign user the pokemon of their choice

2. Select a random pokemon for the player to battle, from the API

3. Use each pokemon's hp and name property from the API to be displayed to the player

4. Implement a turn based "battle"
  4a. During the player's turn, allow them to choose between the following actions:
    - Attack: remove a random number between 1-100 from the rival pokemon's healthPoints
    - Defend: add a random number between 1-100 to the player pokemon's healthPoints
    - Run: quit the game

  4b. During the rival's turn, choose a random action (attack or defend)

  4c. Display the player and opponents healthPoints between each turn

  4d. The game ends when either the player or rival's healthPoints reaches 0
    - Display "You Win" / "You Lose" accordingly
  
*/

async function run() {
  /* [ ] Present user w/ 3 random pokemon to choose from using the pokemon API */

  const player = {
    name: "Eevee",
    healthPoints: 100,
  };

  console.log(`You choose ${player.name}!`);

  /* [ ] Select a random pokemon for the player to battle, using the API */
  const rival = { name: "Pikachu", healthPoints: 10 };
  console.log(`Your rival pokemon is ... ${rival.name}\n`);

  /* [ ] Use each pokemon's healthPoints and name property from the API to be displayed to the player */
  console.log(`Player - ${player.name}: Health Points: ${player.healthPoints}`);
  console.log(`Rival - ${rival.name}: Health Points: ${rival.healthPoints}\n`);

  /*
  [ ] Implement a turn based "battle"
      [ ]. During the player's turn, allow them to choose between the following actions:
        - Attack: remove a random number between 1-100 from the rival pokemon's healthPoints
        - Defend: add a random number between 1-100 to the player pokemon's healthPoints
        - Run: quit the game

      [ ]. During the rival's turn, choose a random action (attack or defend)

      [ ]. Display the player and opponents healthPoints between each turn

      [ ]. The game ends when either the player or rival's healthPoints reaches 0
        - Display "You Win" / "You Lose" accordingly
  */
  while (true) {
    console.log("-------------------------");

    console.log("--Player Turn--");

    console.log("--Rival Turn--");

    process.exit();
  }
}

run();
