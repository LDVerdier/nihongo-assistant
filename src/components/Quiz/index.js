import React, { useState } from 'react';
import './quiz.scss';
import QuizGame from './QuizGame';

const Quiz = () => {
  const [hideOptions, setHideOptions] = useState(true);
  const [gameIsStarted, setGameIsStarted] = useState(false);
  // const [quizItem, setQuizItem] = useState(
  //   {
  //     question: '',
  //     answers: [
  //       {
  //         isCorrect: true,
  //         value: '',
  //       },
  //       {
  //         isCorrect: false,
  //         value: '',
  //       },
  //       {
  //         isCorrect: false,
  //         value: '',
  //       },
  //     ],
  //     // goodAnswer: '',
  //     // wrongAnswers: [],
  //   },
  // );

  const [kanaToFind, setKanaToFind] = useState('');

  const toggleOptions = () => {
    setHideOptions(!hideOptions);
  };

  const play = () => {
    setGameIsStarted(true);
  };

  return (
    <div className="quiz">
      <h2 className="quiz__title">Entraînement !</h2>
      <button type="button" onClick={toggleOptions}>Options</button>
      <div className={`quiz__options ${hideOptions ? 'quiz__options--hidden' : ''}`}>
        Les options
      </div>
      <button type="button" onClick={play}>Play !</button>
      {gameIsStarted && <QuizGame />}
    </div>
  );
};

export default Quiz;