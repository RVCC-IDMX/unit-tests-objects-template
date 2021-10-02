/*
 * objects-02.js
 * Language: javascript
 * Test: tests/objects-02.test.js
 * Path: src/objects-02.js
 *
 */

/*
? Exporting and Importing
?
? Notice the below object colorHexCodes is defined and assigned at
? outside of any function. The scope of colorHexCodes is available
? but limited only to the functions defined in this file.
?
? In JavaScript when you export something, that something can be used in
? another file by importing it. This is called a module. Mostly we export
? functions but objects could be exported as well.
?
? The colorHexCodes object isn't exported, so it is not available
? outside of this file.
?
? This helps protect it against collisions with other variables and
? functions. It is also protected from accidental changes to the object.
?
? We are using CommonJS module pattern to export the colorHexCodes object.
? But the same idea can be applied to ES6 modules.
? Export - https://mzl.la/3D5G4CH
?
*/

/*
? An Object is a Lookup Table -https://bit.ly/3l9V8tb
?
? Lookup tables are often used to map data to other data. They are much
? more efficient than using a switch statement or if/else statements.
?
?
? This file is using the object as a lookup table to convert color names to
? hex values.
*/

// eslint-disable-next-line no-unused-vars
const colorHexCodes = {
  red: '#FF0000',
  green: '#00FF00',
  blue: '#0000FF',
  yellow: '#FFFF00',
  orange: '#FFA500',
  purple: '#800080',
  black: '#000000',
  white: '#FFFFFF',
  brown: '#A52A2A',
  gray: '#808080',
  pink: '#FFC0CB',
  cyan: '#00FFFF',
  magenta: '#FF00FF',
  lime: '#00FF00',
  maroon: '#800000',
  navy: '#000080',
  olive: '#808000',
  silver: '#C0C0C0',
  teal: '#008080',
  violet: '#EE82EE',
  turquoise: '#40E0D0',
};

/**
 * Finds the color code for the given color name.
 * @param {string} color - the name of the color to return its hex value
 * @returns {string} - the hex value of the color
 *
 * example: getColorValue('red') => '#FF0000'
 * example: getColorValue('blue') => '#0000FF'
 *
 * must use colorHexCodes as a lookup table
 */
function getColorValue(color) {
  // write your code here & return value
}

module.exports = {
  getColorValue,
};
