import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Answer = ({ answer, wasAnswered, setSlideToAnswered, incrementSlideCount }) => {
  const classes = classNames(
    'quiz__game__answer',
    {
      [`quiz__game__answer--display-${answer.isCorrect ? 'right' : 'wrong'}`]: wasAnswered,
    },
  );
  const handleAnswerClick = () => {
    console.log('click on ', answer.text);
    if (!wasAnswered) {
      setSlideToAnswered();
      console.log('timeout');
      setTimeout(incrementSlideCount, 1500);
    }
  };
  return (
    <div className={classes} onClick={handleAnswerClick}>
      {answer.text}
    </div>
    // 
  );
};

export default Answer;

Answer.propTypes = {

};
