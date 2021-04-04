// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import Cell from '../Cell';

// == Composant
const Row = ({ syllables, kanaType }) => {
  const cells = syllables.map((syllable) => (
    <Cell key={syllable.id} symbol={syllable[kanaType]} pronunciation={syllable.pronunciation} />
  ));
  return (
    <tr className="border">
      {cells}
    </tr>
  );
};

Row.propTypes = {
  syllables: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  kanaType: PropTypes.string.isRequired,
};

// == Export
export default Row;
