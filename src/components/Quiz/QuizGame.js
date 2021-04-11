// == Import npm
import React, { useState } from 'react';

import { getRandomInt, shuffle } from '../../assets/js/utils';
import kana from '../../services/kana';

// == Composant
const QuizGame = () => {
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [gameIsStarted, setGameIsStarted] = useState(false);
  const [gameIsFinished, setGameIsFinished] = useState(false);
  const [correctAnswersCounter, setCorrectAnswersCounter] = useState(0);

  const startQuiz = () => {
    const newQuizQuestions = kana.getArrayOfRandomKanas();
    setQuizQuestions(newQuizQuestions);
    setGameIsStarted(true);
    
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
    <>
      <button type="button" onClick={startQuiz}>Play !</button>
      {gameIsStarted && !gameIsFinished && (
        <div className="quiz__game">
          <p className="quiz__game__counter">Question {currentQuestionIndex + 1} / {quizQuestions.length} :</p>
          <div className="quiz__game__question">
            {quizQuestions[currentQuestionIndex].katakana}
          </div>
          <div className="quiz__game__answer-group">
            {
              getArrayOfAnswers(quizQuestions[currentQuestionIndex]).map((answerElement) => (
                <div
                  key={answerElement.id}
                  className="quiz__game__answer"
                  onClick={handleAnswerClick}
                >
                  {answerElement.pronunciation}
                </div>
              ))
            }
          </div>
        </div>
      )}
      {gameIsFinished && (
        <>
          <div>
            Terminé ! {correctAnswersCounter} bonne(s) réponse(s) sur {quizQuestions.length} !
          </div>
          <button type="button" onClick={reStartQuiz}>Rejouer ?</button>
        </>
      )}
    </>
  );
};

QuizGame.propTypes = {
};

// == Export
export default QuizGame;
