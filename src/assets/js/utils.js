/* eslint-disable import/prefer-default-export */
import syllabary from '../../data/Syllabary';
/**
 * Return an integer between 0 (included) and max (excluded)
 * @param {Number} max : upper limit (excluded)
 */
export const getRandomInt = (max) => Math.floor(Math.random() * max);

export const getRandomElementOfArray = (array) => array[getRandomInt(array.length)];

export const shuffle = function (array) {
  // créer un tableau vide shuffledArray
  const arrayCopy = array.slice();
  const shuffledArray = [];
  // while array.length > 0
  while (arrayCopy.length > 0) {
    // tire un nombre x entre 0 et la longueur de array
    const randomNumber = getRandomInt(arrayCopy.length);
    // push array[x] dans shuffledArray
    shuffledArray.push(arrayCopy[randomNumber]);
    // array.splice(x, 1)
    arrayCopy.splice(randomNumber, 1);
  }
  return shuffledArray;
};

// /**
//  * 
//  * @param {Number} max upper limit (excluded)
//  * @param {Array} numbersToAvoid returned int will be different from all values of the array
//  */
// export const getRandomIntNoDuplicate = (max, numbersToAvoid) => {
//   let randomInt = Math.floor(Math.random() * max);
//   console.log(numbersToAvoid, randomInt);
//   if (numbersToAvoid.includes(randomInt)) {
//     console.log(numbersToAvoid);
//     console.log('duplicate ! ' + randomInt);
//     while (numbersToAvoid.includes(randomInt)) {
//       randomInt = Math.floor(Math.random() * max);
//     }
//   }
//   return randomInt;
// };

/**
 * Returns an array without a specific value
 * @param {Array} arr
 * @param {Number} value
 */
export const arrayRemove = (arr, value) => arr.filter((ele) => ele !== value);

export const getKanasAsArray = () => {
  const kanaArray = syllabary.map((serie) => serie.syllables) // get all sub arrays of syllables
    .flat() // extract all syllables within all arrays
    .filter((kana) => kana.pronunciation !== ''); // filter empty syllables
  return kanaArray;
};

export const getArrayOfRandomKanas = (number = 5) => () => {
  const randomKanas = [];
  let kanaArray = getKanasAsArray();
  while (randomKanas.length < number) {
    const newKana = kanaArray[getRandomInt(kanaArray.length)];
    kanaArray = arrayRemove(kanaArray, newKana);
    randomKanas.push(newKana);
  }
  return randomKanas;
};

export const getRandomKana = () => {
  const kanaArray = getKanasAsArray();
  return kanaArray[getRandomInt(kanaArray.length)];
};

/**
 * Returns the id value of all kanas as an array
 */
export const getAllKanaId = () => {
  const kanaArray = getKanasAsArray();
  const allKanaId = kanaArray.map((kana) => kana.id);
  return allKanaId;
};

export const getKanaById = (id) => () => {
  // console.log(id);
  const kanaList = getKanasAsArray();
  // console.log(kanaList);
  const foundKana = kanaList.find((kana) => kana.id === id);
  // console.log(foundKana);
  return foundKana;
};
