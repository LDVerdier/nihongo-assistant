import kanaData from 'src/services/kana';
import { getRandomInt, shuffle } from 'src/assets/js/utils';

/**
 * Returns a set of slides as an array of objects
 * @param {Number} length : how many slides you want
 */
export const generateSlides = (length) => {
  // contains kana objects
  const questions = kanaData.getArrayOfRandomKanas(length);
  // console.log(Array.isArray(questions));
  // the whole list of kanas
  const kanaList = kanaData.getKanasAsArray();
  const slides = questions.map((question, index) => ({
    id: index + 1,
    wasAnswered: false,
    question,
    // eslint-disable-next-line no-use-before-define
    answers: getArrayOfAnswers(question, kanaList),
  }));
  // console.log('slides: ', slides, typeof slides);
  // console.log(Array.isArray(slides));
  return slides;
};

export const getArrayOfAnswers = (questionKana, kanaList, arrayLength = 3) => {
  // on prépare un tableau contenant l'id du kana question
  const arrayOfKanaId = [questionKana.id];
  // tant qu'on n'a pas le nombre de réponses requises
  while (arrayOfKanaId.length < arrayLength) {
    // on génère un id de kana aléatoire
    const randomKanaId = kanaList[getRandomInt(kanaList.length)].id;
    if (!arrayOfKanaId.includes(randomKanaId)) {
      // s'il n'est pas déjà dans le tableau, on l'ajoute
      arrayOfKanaId.push(randomKanaId);
    }
  }
  // arrayOfKanaId contient 3 id différents, le premier est le bon.
  const arrayOfAnswers = arrayOfKanaId.map((idElement, index) => ({
    id: idElement,
    text: kanaList.find((kanaElement) => kanaElement.id === idElement).pronunciation,
    isCorrect: index === 0,
  }));
  // mélange l'ordre
  const shuffledAnswers = shuffle(arrayOfAnswers);

  return shuffledAnswers;
};
