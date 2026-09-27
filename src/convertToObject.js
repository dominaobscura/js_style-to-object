'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cssObject = {};

  sourceString
    .split(';')
    .map((style) => style.split(':').map((item) => item.trim()))
    .filter((value) => value !== '')
    .forEach((index) => {
      cssObject[index[0]] = index[1];
    });

  return cssObject;
}

module.exports = convertToObject;
