import React from 'react';
import PropTypes from 'prop-types';

const Options = ({
  currentOptions, availableOptions, updateOptions,
}) => {
  const handleKanaTypeClick = (event) => {
    const newKanaType = event.target.textContent;
    updateOptions(newKanaType, 'kanaType');
  };

  const handleQuizLengthClick = (event) => {
    const newQuizLength = parseInt(event.target.textContent, 10);
    updateOptions(newQuizLength, 'quizLength');
  };

  return (
    <div className="quiz__options">
      <div className="quiz__options__field">
        <h4 className="quiz__options__title">Type de Kana</h4>
        <div className="quiz__options__option-group">
          {availableOptions.kanaTypes.map((kanaType) => (
            <div
              key={kanaType}
              className={`quiz__options__option-group__item ${kanaType === currentOptions.kanaType ? 'quiz__options__option-group__item--selected' : ''}`}
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
          {availableOptions.quizLengths.map((quizLength) => (
            <div
              key={quizLength}
              className={`quiz__options__option-group__item ${quizLength === parseInt(currentOptions.quizLength, 10) ? 'quiz__options__option-group__item--selected' : ''}`}
              onClick={handleQuizLengthClick}
            >
              {quizLength}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

Options.propTypes = {
  currentOptions: PropTypes.shape({
    kanaType: PropTypes.string.isRequired,
    quizLength: PropTypes.number.isRequired,
  }).isRequired,
  availableOptions: PropTypes.shape({
    kanaTypes: PropTypes.arrayOf(
      PropTypes.string.isRequired,
    ).isRequired,
    quizLengths: PropTypes.arrayOf(
      PropTypes.number.isRequired,
    ).isRequired,
  }).isRequired,
  updateOptions: PropTypes.func.isRequired,
};

export default Options;
