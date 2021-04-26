// == Import npm
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Slide from 'src/containers/Quiz/Slide';

import { getRandomInt, shuffle } from '../../assets/js/utils';
import kana from '../../services/kana';

// == Composant
const QuizGame = ({
  currentOptions: { kanaType, quizLength },
  initiateSlides,
  hasStarted,
  hasFinished,
}) => {
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [gameIsStarted, setGameIsStarted] = useState(false);
  const [gameIsFinished, setGameIsFinished] = useState(false);
  const [correctAnswersCounter, setCorrectAnswersCounter] = useState(0);

  const startQuiz = () => {
    const newQuizQuestions = kana.getArrayOfRandomKanas(quizLength);
    setQuizQuestions(newQuizQuestions);
    setGameIsStarted(true);
    initiateSlides();
    // const arrayOfAnswers = getArrayOfAnswers(questionKana);
  };

  const reStartQuiz = () => {
    setGameIsFinished(false);
    setCurrentQuestionIndex(0);
    setCorrectAnswersCounter(0);
    startQuiz();
  };

  // fournit un ensemble de réponses dont une bonne, par rapport à une question
  // les réponses sont fournies dans un ordre aléatoire
  const getArrayOfAnswers = (questionKana, arrayLength = 3) => {
    const arrayOfKanaId = [questionKana.id];
    const kanaList = kana.getKanasAsArray();
    // tant qu'on n'a pas le nombre de réponses requises
    while (arrayOfKanaId.length < arrayLength) {
      const randomKanaId = kanaList[getRandomInt(kanaList.length)].id;
      if (!arrayOfKanaId.includes(randomKanaId)) {
        arrayOfKanaId.push(randomKanaId);
      }
    }

    // pour chaque élément du tableau randomisé
    const arrayOfAnswers = shuffle(arrayOfKanaId).map((idElement) => (
      // retourner l'élément de kanaList qui porte cet id
      kanaList.find((kanaElement) => kanaElement.id === idElement)
    ));
    return arrayOfAnswers;
  };

  const checkAnswer = (answer) => quizQuestions[currentQuestionIndex].pronunciation === answer;

  const handleAnswerClick = (e) => {
    if (checkAnswer(e.target.textContent)) {
      setCorrectAnswersCounter(correctAnswersCounter + 1);
    }
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
    else {
      setGameIsFinished(true);
    }
  };

  return (
    <div className="quiz__game">
      {!gameIsStarted && !gameIsFinished && (
        <button
          type="button"
          onClick={startQuiz}
          className="quiz__game__button"
        >
          Démarrer !
        </button>
      )}
      {gameIsStarted && !gameIsFinished && (
        <Slide />
      )}
      {gameIsFinished && (
        <div className="quiz__game__result">
          <h3 className="quiz__game__result__heading">
            Terminé ! {correctAnswersCounter} bonne(s) réponse(s) sur {quizQuestions.length} !
          </h3>
          <button
            type="button"
            onClick={reStartQuiz}
            className="quiz__game__button"
          >
            Rejouer ?
          </button>
        </div>
      )}
    </div>
  );
};

QuizGame.propTypes = {
  currentOptions: PropTypes.shape({
    kanaType: PropTypes.string.isRequired,
    quizLength: PropTypes.number.isRequired,
  }).isRequired,
  initiateSlides: PropTypes.func.isRequired,
};

// == Export
export default QuizGame;
