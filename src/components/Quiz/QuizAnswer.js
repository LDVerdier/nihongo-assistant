// == Import npm
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// import { getRandomInt, shuffle } from '../../assets/js/utils';

// == Composant
const QuizAnswer = ({ selectAnswer, pronunciation, isCorrectAnswer }) => {
  const [isSelected, setIsSelected] = useState(false);
  const handleAnswerClick = (event) => {
    setIsSelected(true);
    setTimeout(() => selectAnswer(event), 1000);
  };
  const additionalClass = isCorrectAnswer ? 'quiz__game__answer--correct' : 'quiz__game__answer--wrong';
  return (
    <div
      className={`quiz__game__answer ${isSelected ? additionalClass : ''}`}
      onClick={handleAnswerClick}
    >
      {pronunciation}
      {/* {isCorrectAnswer ? 'moi !' : 'pas moi !'} */}
    </div>
  );
};

QuizAnswer.propTypes = {
  selectAnswer: PropTypes.func.isRequired,
  pronunciation: PropTypes.string.isRequired,
  isCorrectAnswer: PropTypes.bool.isRequired,
};

// == Export
export default QuizAnswer;
