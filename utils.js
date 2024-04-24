const readline = require("node:readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/**
 * Prompt the user for text input
 *
 * @param {string} question The text displayed in the console when requesting input from the user.
 */
const readUserInput = (question) => {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
};

/**
 * Return an integer between 1 and the provide max number
 *
 * @param {number} max The maximum value of the random integer
 * @returns {number}
 */
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

module.exports = {
  readUserInput,
  getRandomNumber,
};
