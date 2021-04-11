import React, { useState } from 'react';

const Options = ({ options, setOptions }) => {
  const [possibleOptions] = useState({
    kanaTypes: ['hiragana', 'katakana'],
    quizLengths: [5, 10, 20, 30, 46],
  });

  const handleKanaTypeClick = (event) => {
    const newKanaType = event.target.textContent;
    const newOptions = { ...options, kanaType: newKanaType };
    setOptions(newOptions);
  };
  const handleQuizLengthClick = (event) => {
    const newQuizLength = event.target.textContent;
    const newOptions = { ...options, quizLength: newQuizLength };
    setOptions(newOptions);
  };

  return (
    <div className="quiz__options">
      <div className="quiz__options__field">
        <h4 className="quiz__options__title">Type de Kana</h4>
        <div className="quiz__options__option-group">
          {possibleOptions.kanaTypes.map((kanaType) => (
            <div
              key={kanaType}
              className={`quiz__options__option-group__item ${kanaType === options.kanaType ? 'quiz__options__option-group__item--selected' : ''}`}
              onClick={handleKanaTypeClick}
            >
              {kanaType}
            </div>
          ))}
        </div>
      </div>
      <div className="quiz__options__field">
        <h4 className="quiz__options__title">Nombre de questions</h4>
        <div className="quiz__options__option-group">
          {possibleOptions.quizLengths.map((quizLength) => (
            <div
              key={quizLength}
              className={`quiz__options__option-group__item ${quizLength === parseInt(options.quizLength, 10) ? 'quiz__options__option-group__item--selected' : ''}`}
              onClick={handleQuizLengthClick}
            >
              {quizLength}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
};

export default Options;
