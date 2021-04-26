import React from 'react';
import PropTypes from 'prop-types';

const Answer = ({ answer, wasAnswered, setSlideToAnswered, incrementSlideCount }) => {
  const classes = wasAnswered ? `quiz__game__answer--display-${answer.isCorrect ? 'right' : 'wrong'}` : 'quiz__game__answer';

  const handleAnswerClick = () => {
    if (!wasAnswered) {
      setSlideToAnswered(answer.isCorrect);
      setTimeout(incrementSlideCount, 1500);
    }
  };
  return (
    <div className={classes} onClick={handleAnswerClick}>
      {answer.text}
    </div>
  );
};

export default Answer;

Answer.propTypes = {
  answer: PropTypes.shape({
    isCorrect: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
  wasAnswered: PropTypes.bool.isRequired,
  setSlideToAnswered: PropTypes.func.isRequired,
  incrementSlideCount: PropTypes.func.isRequired,
};
