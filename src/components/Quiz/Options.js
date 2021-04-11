import React, { useState } from 'react';

const Options = ({ options, setOptions }) => {
  console.log(options);
  const [possibleOptions] = useState({
    kanaTypes: ['hiragana', 'katakana'],
    quizLengths: [5, 10, 20, 30, 46],
  });

  const handleKanaTypeClick = (event) => {
    console.log(event.target.textContent);
    const newKanaType = event.target.textContent;
    const newOptions = { ...options, kanaType: newKanaType };
    setOptions(newOptions);
  };
  const handleQuizLengthClick = (event) => {
    console.log(event.target.textContent);
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
              className="quiz__options__option-item"
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
              className="quiz__options__option-item"
              onClick={handleQuizLengthClick}
            >
              {quizLength}
            </div>
          ))}
          {/* <div className="quiz__options__option-item">
            5
          </div>
          <div className="quiz__options__option-item">
            10
          </div>
          <div className="quiz__options__option-item">
            20
          </div>
          <div className="quiz__options__option-item">
            30
          </div>
          <div className="quiz__options__option-item">
            Série complète !
          </div> */}
        </div>
      </div>
    </div>
  )
};

export default Options;
