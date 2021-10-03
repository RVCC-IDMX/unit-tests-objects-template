/*
 * objects-02.js
 * Language: javascript
 * Test: tests/objects-02.test.js
 * Path: src/objects-02.js
 *
 * Simple Intro to Modules & Objects as Lookup Tables
 *
 * "Good modules are highly self-contained with distinct
 * functionality, allowing them to be shuffled, removed, or added as
 * necessary, without disrupting the system as a whole."
 * https://bit.ly/3A2xvXC
 *
 */

/*
? Exporting and Importing
?
? Notice the below object colorHexCodes is defined and assigned
? outside of any function. The scope of colorHexCodes is available
? (but limited only) to the functions defined in this file.
?
? In JavaScript modules when you export something, that something can be used in
? another file by importing it. Mostly we export functions but objects can be exported as well.
?
? The colorHexCodes object isn't exported, so it is not available
? outside of this file. We are keeping our color table private to this file.
?
? Making an object private is a good way to keep your code clean and
? protects the object's values from being overwritten by some other piece of code somewhere else.
?
? We are using CommonJS module pattern to export the colorHexCodes object.
? But the same idea can be applied to ES6 modules.
? Export - https://mzl.la/3D5G4CH
?
*/

/*
? An Object Can Be a Lookup Table -https://bit.ly/3l9V8tb
?
? Lookup tables are often used to map data to other data. They are much
? more efficient than using a switch statement or if/else statements.
?
? This file is using the object as a lookup table to convert color names to
? hex values. (https://htmlcolorcodes.com/color-names/)
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

/**
 * Returns boolean if the given color is in the color table
 * @param {string} color - color name to see if it is in the color table
 * @returns {boolean} - true if the color is in the color table,
 * false otherwise
 *
 * example: testForColor('red') => true
 * example: testForColor('pink') => true
 * example: testForColor('chartreuse') => false // not in the table
 *
 * must use colorHexCodes as a lookup table
 * must use hasOwnProperty() to check if the color is in the table
 *
 * book - https://bit.ly/3D5ojn5
 * Mozilla - https://mzl.la/3F6tk0F
 */
function testForColor(color) {
  // write your code here & return value
}

module.exports = {
  getColorValue,
  testForColor,
};
