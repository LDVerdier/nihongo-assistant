import React from 'react';
import PropTypes from 'prop-types';

import Row from '../Row';

const Grid = ({ syllabary, kanaType }) => {
  const rows = syllabary.map(({ id, syllables }) => (
    <Row key={id} syllables={syllables} kanaType={kanaType} />
  ));
  return (
    <>
      <p className="text-center">Double-cliquez sur une case pour afficher la prononciation !</p>
      <table className="grid border">
        {rows}
      </table>
    </>
  );
};

Grid.propTypes = {
  syllabary: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      syllables: PropTypes.array.isRequired,
    }).isRequired,
  ).isRequired,
  kanaType: PropTypes.string.isRequired,
};

export default Grid;
