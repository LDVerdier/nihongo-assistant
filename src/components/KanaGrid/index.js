import React from 'react';
import PropTypes from 'prop-types';

import Row from '../Row';
import './kanagrid.scss';

const KanaGrid = ({ syllabary, kanaType }) => {
  const rows = syllabary.map(({ id, syllables }) => (
    <Row key={id} syllables={syllables} kanaType={kanaType} />
  ));
  return (
    <div className="kanagrid">
      <p className="kanagrid__helper">Double-cliquez sur une case pour afficher la prononciation !</p>
      <table className="kanagrid__table">
        <tbody>
          {rows}
        </tbody>
      </table>
    </div>
  );
};

KanaGrid.propTypes = {
  syllabary: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      syllables: PropTypes.array.isRequired,
    }).isRequired,
  ).isRequired,
  kanaType: PropTypes.string.isRequired,
};

export default KanaGrid;
