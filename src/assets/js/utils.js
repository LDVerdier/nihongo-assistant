/* eslint-disable import/prefer-default-export */

/**
 * Return an integer between 0 (included) and max (excluded)
 * @param {Number} max : upper limit (excluded)
 */
export const getRandomInt = (max) => Math.floor(Math.random() * max);

/**
 * Returns an array without a specific value
 * @param {Array} arr
 * @param {Number} value
 */
export const arrayRemove = (arr, value) => arr.filter((ele) => ele !== value);
