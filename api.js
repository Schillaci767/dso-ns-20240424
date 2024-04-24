const fs = require("fs");
const path = require("path");

/**
 * @typedef {Object} Details
 * @property {string} name - the name of parent object
 * @property {string} url - the api url of the parent object
 *
 * @typedef {Object} Stat
 * @property {number} base_stat - The value of the stat
 * @property {number} effort - The effort value of the stat
 * @property {Details} stat - The details of the stat
 *
 * @typedef {Object} Ability
 * @property {Details} ability - The details of the ability
 * @property {boolean} is_hidden - Is ability hidden or not
 * @property {number} slot - The slot number of the ability
 *
 *
 * @typedef {Object} Pokemon
 * @property {number} id - The ID number of the pokemon
 * @property {string} name - The name of the pokemon
 * @property {Array<Stat>} stats - The stats of the pokemon
 * @property {Array<Ability>} abilities - The abilities of the pokemon
 *
 */

const MAX_POKEMON_ID = 151;

/**
 * @returns {Array<Pokemon>}
 */
function loadPokemonFile() {
  return JSON.parse(
    fs.readFileSync(path.join(__dirname, "data", "pokemon.json")).toString()
  );
}

/**
 *
 * @param {number} id
 * @returns {Pokemon|null}
 */
function getPokemonByNumber(id) {
  return {
    name: "eevee",
    id: 133,
    stats: [
      {
        base_stat: 55,
        effort: 0,
        stat: {
          name: "hp",
          url: "/api/v2/stat/1/",
        },
      },
    ],
    abilities: [
      {
        ability: {
          name: "run-away",
          url: "/api/v2/ability/50/",
        },
        is_hidden: false,
        slot: 1,
      },
    ],
  };
}

module.exports = {
  getPokemonByNumber,
};
