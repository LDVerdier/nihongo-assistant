import React, { useState } from 'react';
import { BsFillGearFill } from 'react-icons/bs';
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
      <h2 className="quiz__title">
        Entraînement ! <BsFillGearFill onClick={toggleOptions} />
      </h2>
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
