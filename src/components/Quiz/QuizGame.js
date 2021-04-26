// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import Slide from 'src/containers/Quiz/Slide';

// == Composant
const QuizGame = ({
  currentOptions: { quizLength },
  initiateSlides,
  hasStarted,
  hasFinished,
  goodAnswers,
}) => {
  const startQuiz = () => {
    initiateSlides();
  };

  return (
    <div className="quiz__game">
      {!hasStarted && !hasFinished && (
        <button
          type="button"
          onClick={startQuiz}
          className="quiz__game__button"
        >
          Démarrer !
        </button>
      )}
      {hasStarted && !hasFinished && (
        <Slide />
      )}
      {hasFinished && (
        <div className="quiz__game__result">
          <h3 className="quiz__game__result__heading">
            Terminé ! {goodAnswers} bonne(s) réponse(s) sur {quizLength} !
          </h3>
          <button
            type="button"
            onClick={startQuiz}
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
  hasStarted: PropTypes.bool.isRequired,
  hasFinished: PropTypes.bool.isRequired,
  goodAnswers: PropTypes.number.isRequired,
};

// == Export
export default QuizGame;
