import React from 'react';
import PropTypes from 'prop-types';

import Answer from 'src/containers/Quiz/Answer';

const Slide = ({
  currentSlideIndex, quizLength, questionText, answers,
}) => (
  <>
    <p className="quiz__game__counter">Question {currentSlideIndex + 1} / {quizLength} :</p>
    <div className="quiz__game__question">
      {questionText}
    </div>
    <div className="quiz__game__answer-group">
      {
          answers.map((answerElement) => (
            <Answer
              key={answerElement.id}
              answer={answerElement}
            />
          ))
        }
    </div>
  </>
);

export default Slide;

Slide.propTypes = {
  currentSlideIndex: PropTypes.number.isRequired,
  quizLength: PropTypes.number.isRequired,
  questionText: PropTypes.string.isRequired,
  answers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};
