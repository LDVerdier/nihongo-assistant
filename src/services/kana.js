import syllabary from '../data/Syllabary';

import {
  getRandomInt, shuffle, getRandomElementOfArray, arrayRemove
} from '../assets/js/utils';

const kana = (() => {
  const data = syllabary;
  /**
   * Returns the full syllabary as is
   */
  const getRawData = () => data;

  /**
   * Returns all the non-empty kanas as an array of objects
   */
  const getKanasAsArray = () => {
    const kanaArray = syllabary.map((serie) => serie.syllables) // get all sub arrays of syllables
      .flat() // extract all syllables within all arrays
      .filter((currentKana) => currentKana.pronunciation !== ''); // filter empty syllables
    return kanaArray;
  };
  /**
   * Returns an array of kana objects chosen randomly, no duplicate
   * @param {Number} number
   */
  const getArrayOfRandomKanas = (number = 5) => {
    const randomKanas = [];
    let kanaArray = getKanasAsArray();
    while (randomKanas.length < number) {
      const newKana = kanaArray[getRandomInt(kanaArray.length)];
      kanaArray = arrayRemove(kanaArray, newKana);
      randomKanas.push(newKana);
    }
    return randomKanas;
  };
  /**
   * Returns a random non-empty kana
   */
  const getRandomKana = () => {
    const kanaArray = getKanasAsArray();
    return kanaArray[getRandomInt(kanaArray.length)];
  };

  /**
   * Returns an array of all non-empty kana's ids
   */
  const getAllKanaId = () => {
    const kanaArray = getKanasAsArray();
    const allKanaId = kanaArray.map((kanaItem) => kanaItem.id);
    return allKanaId;
  };

  /**
   * Returns the kana object matching the given id
   * @param {Number} id
   */
  const getKanaById = (id) => {
    const kanaList = getKanasAsArray();
    const foundKana = kanaList.find((kanaItem) => kanaItem.id === id);
    return foundKana;
  };

  return {
    getRawData,
    getKanasAsArray,
    getArrayOfRandomKanas,
    getRandomKana,
    getAllKanaId,
    getKanaById,
  };
})();

export default kana;
