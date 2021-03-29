// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import Cell from './Cell';

// == Composant
const Row = ({ kanaSerie }) => {
  console.log(kanaSerie);
  const cells = kanaSerie.map((kana) => (
    <Cell key={kana.id} {...kana} />
  ));
  return (
    <div className="grid__serie" >
      {cells}
    </div>
  );
};

Row.propTypes = {
};

// == Export
export default Row;
