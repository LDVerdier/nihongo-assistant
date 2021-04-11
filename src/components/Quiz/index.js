import React, { useState } from 'react';
import { BsFillGearFill } from 'react-icons/bs';
import { MdDone } from 'react-icons/md';
import './quiz.scss';
import QuizGame from './QuizGame';
import Options from './Options';

const Quiz = () => {
  const [hideOptions, setHideOptions] = useState(true);
  const [options, setOptions] = useState({
    kanaType: 'hiragana',
    quizLength: 5,
  });

  const toggleOptions = () => {
    setHideOptions(!hideOptions);
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
          onClick={toggleOptions}
        >
          {hideOptions ? <BsFillGearFill /> : <MdDone />}
        </button>
      </div>
      {/* <button type="button" >Options</button> */}
      {!hideOptions && (
        <Options options={options} setOptions={setOptions} />
      )}
      {hideOptions && (
      <QuizGame options={options} />
      )}
    </div>
  );
};

export default Quiz;
