import React from 'react';
import PropTypes from 'prop-types';

import Row from '../Row';
import './kanagrid.scss';
import kana from '../../services/kana';

const KanaGrid = ({ kanaType }) => {
  const series = kana.getRawData().map(({ id, syllables }) => (
    <Row key={id} syllables={syllables} kanaType={kanaType} />
  ));
  return (
    <div className="kanagrid">
      <p className="kanagrid__helper">Double-cliquez sur une case pour afficher la prononciation !</p>
      <table className="kanagrid__table">
        <tbody>
          {series}
        </tbody>
      </table>
    </div>
  );
};

KanaGrid.propTypes = {
  kanaType: PropTypes.string.isRequired,
};

export default KanaGrid;
