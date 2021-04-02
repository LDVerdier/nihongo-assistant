// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import Cell from '../Cell';

// == Composant
const Row = ({ syllables, kanaType }) => {
  // console.log(syllables, kanaType);
  const cells = syllables.map((syllable) => (
    <Cell key={syllable.id} symbol={syllable[kanaType]} />
  ));
  return (
    <tr className="border" >
      {cells}
    </tr>
  );
};

Row.propTypes = {
};

// == Export
export default Row;
