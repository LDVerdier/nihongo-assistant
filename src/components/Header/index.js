import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './header.scss';

export default () => (
  <header className="header">
    <Navbar expand="md">
      <Link to="/" className="header__nav__link">Nihongo Assistant</Link>
      {/* <Navbar.Brand className="text-light" href="#home">Nihongo Assistant</Navbar.Brand> */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link to="/hiragana" className="header__nav__link">Hiragana</Link>
          <Link to="/katakana" className="header__nav__link">Katakana</Link>
          <Link to="/kanji" className="header__nav__link">Kanji</Link>
          <Link to="/entrainement" className="header__nav__link">Entraînement</Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </header>
);
