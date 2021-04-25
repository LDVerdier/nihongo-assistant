import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { BsFillGearFill } from 'react-icons/bs';
import { MdDone } from 'react-icons/md';
import './quiz.scss';
import Options from 'src/containers/Quiz/Options';
import QuizGame from 'src/containers/Quiz/QuizGame';
// import QuizGame from './QuizGame';

const Quiz = ({ hideOptions, toggleOptions }) => {
  // const [hideOptions, setHideOptions] = useState(true);
  const [options, setOptions] = useState({
    kanaType: 'hiragana',
    quizLength: 5,
  });

  const handleOptionsClick = () => {
    toggleOptions();
  };

  return (
    <div className="quiz">
      <div className="quiz__title">
        <h2 className="quiz__title__heading">
          Entraînement !
        </h2>
        <button
          type="button"
          className={`quiz__title__button ${hideOptions ? '' : 'quiz__title__button--close'}`}
          // className="quiz__title__button"
          onClick={handleOptionsClick}
        >
          {hideOptions ? <BsFillGearFill /> : <MdDone />}
        </button>
      </div>
      {/* <button type="button" >Options</button> */}
      {!hideOptions && (
        <Options />
      )}
      {hideOptions && (
      <QuizGame options={options} />
      )}
    </div>
  );
};

export default Quiz;

Quiz.propTypes = {
  hideOptions: PropTypes.bool.isRequired,
  toggleOptions: PropTypes.func.isRequired,
};
