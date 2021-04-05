import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Cell = ({ symbol, pronunciation }) => {
  const [hidePronunciation, setHidePronunciation] = useState(true);

  const togglePronunciation = () => {
    if (symbol !== '') {
      setHidePronunciation(!hidePronunciation);
    }
  };

  const displaySyllable = () => {
    setTimeout(setHidePronunciation, 500, true);
  };

  return (
    <td
      className={`kanagrid__cell ${symbol ? ' kanagrid__cell--full' : ''}`}
      onDoubleClick={togglePronunciation}
      onMouseLeave={displaySyllable}
    >
      { hidePronunciation ? symbol : pronunciation}
    </td>
  );
};

Cell.propTypes = {
  symbol: PropTypes.string.isRequired,
  pronunciation: PropTypes.string.isRequired,
};

export default Cell;
