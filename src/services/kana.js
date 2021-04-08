import syllabary from '../data/Syllabary';
import {
  getRandomInt, shuffle, getRandomElementOfArray, arrayRemove
} from '../assets/js/utils';

const kana = (() => {
  const data = syllabary;

  const getRawData = () => data;

  const getKanasAsArray = () => {
    const kanaArray = syllabary.map((serie) => serie.syllables) // get all sub arrays of syllables
      .flat() // extract all syllables within all arrays
      .filter((currentKana) => currentKana.pronunciation !== ''); // filter empty syllables
    return kanaArray;
  };

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

  const getRandomKana = () => {
    const kanaArray = getKanasAsArray();
    return kanaArray[getRandomInt(kanaArray.length)];
  };

  const getAllKanaId = () => {
    const kanaArray = getKanasAsArray();
    const allKanaId = kanaArray.map((kanaItem) => kanaItem.id);
    return allKanaId;
  };

  const getKanaById = (id) => {
    // console.log(id);
    const kanaList = getKanasAsArray();
    // console.log(kanaList);
    const foundKana = kanaList.find((kanaItem) => kanaItem.id === id);
    // console.log(foundKana);
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
