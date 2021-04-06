// == Import npm
import React from 'react';

import {
  getKanasAsArray, getRandomKana, getRandomInt, shuffle,
} from '../../assets/js/utils';

// == Composant
const QuizGame = () => {
  // fournit un ensemble de réponses dont une bonne, par rapport à une question
  // les réponses sont fournies dans un ordre aléatoire
  const getArrayOfAnswers = (questionKana, arrayLength = 3) => {
    const arrayOfKanaId = [questionKana.id];
    const kanaList = getKanasAsArray();
    // tant qu'on n'a pas le nombre de réponses requises
    while (arrayOfKanaId.length < arrayLength) {
      const randomKanaId = kanaList[getRandomInt(kanaList.length)].id;
      if (!arrayOfKanaId.includes(randomKanaId)) {
        arrayOfKanaId.push(randomKanaId);
      }
    }

    // console.log(arrayOfKanaId);
    // pour chaque élément du tableau randomisé
    const arrayOfAnswers = shuffle(arrayOfKanaId).map((idElement) => (
      // retourner l'élément de kanaList qui porte cet id
      kanaList.find((kanaElement) => kanaElement.id === idElement)
    ));
    // console.log(arrayOfKanaId);
    console.log(arrayOfAnswers);

    return arrayOfAnswers;
  };
  const questionKana = getRandomKana();
  const arrayOfAnswers = getArrayOfAnswers(questionKana);
  return (
    <div className="quiz__game">
      <div className="quiz__game__question">
        {questionKana.hiragana}
      </div>
      <div className="quiz__game__answer-group">
        {
        arrayOfAnswers.map((answerElement) => (
          <div key={answerElement.id} className="quiz__game__answer">
            {answerElement.pronunciation}
          </div>
        ))
      }

      </div>
    </div>
  );
};

QuizGame.propTypes = {
};

// == Export
export default QuizGame;
