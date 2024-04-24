## Implement a pokemon battle system

1. Present user w/ 3 random pokemon to choose from
   - Assign user the pokemon of their choice

2. Select a random pokemon for the player to battle, from the API

3. Use each pokemon's hp and name property from the API to be displayed to the player

4. Implement a turn based "battle"
    - a. During the player's turn, allow them to choose between the following actions:

      - Attack: remove a random number between 1-100 from the rival pokemon's healthPoints
      - Defend: add a random number between 1-100 to the player pokemon's healthPoints
      - Run: quit the game

    - b. During the rival's turn, choose a random action (attack or defend)

    - c. Display the player and opponents healthPoints between each turn

    - d. The game ends when either the player or rival's healthPoints reaches 0
      - Display "You Win" / "You Lose" accordingly