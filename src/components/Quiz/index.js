import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './quiz.scss';

const Quiz = ({ syllabary }) => {
  const [hideOptions, setHideOptions] = useState(true);

  const getArrayOfKanas = () => {
    const kanaArray = syllabary.map((serie) => serie.syllables) // get all sub arrays of syllables
      .flat() // extract all syllables within all arrays
      .filter((kana) => kana.pronunciation !== ''); // filter empty syllables
    return kanaArray;
  };

  const toggleOptions = () => {
    setHideOptions(!hideOptions);
  };

  /**
   * Returns the id value of all kanas as an array
   */
  const getAllKanaId = () => {
    const kanaArray = getArrayOfKanas();
    const allKanaId = kanaArray.map((kana) => kana.id);
    return allKanaId;
  };

  const getKanaById = (id) => () => {
    // console.log(id);
    const kanaList = getArrayOfKanas();
    // console.log(kanaList);
    const foundKana = kanaList.find((kana) => kana.id === id);
    // console.log(foundKana);
    return foundKana;
  };

  return (
    <div className="quiz">
      <h2 className="quiz__title">Entraînement !</h2>
      <button type="button" onClick={toggleOptions}>Options</button>
      <div className={`quiz__options ${hideOptions ? 'quiz__options--hidden' : ''}`}>
        Les options
      </div>
      <div className="quiz__game">
        <div className="quiz__game__question">
          ho
        </div>
        <div className="quiz__game__answer-group">
          <div className="quiz__game__answer">
            1dvxf
          </div>
          <div className="quiz__game__answer">
            2wdxvfcb
          </div>
          <div className="quiz__game__answer">
            3xdvfcb
          </div>
        </div>
        {/* <button type="button" onClick={getKanaById(5)}>Click !</button> */}
      </div>
    </div>
  );
};

export default Quiz;

Quiz.propTypes = {
  syllabary: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      syllables: PropTypes.array.isRequired,
    }).isRequired,
  ).isRequired,
};
