import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

import { Link } from 'react-router-dom';

export default () => (
  <header>
    <Navbar bg="secondary" expand="md">
      <Link to="/" className="text-light nav-link">Nihongo Assistant</Link>
      {/* <Navbar.Brand className="text-light" href="#home">Nihongo Assistant</Navbar.Brand> */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link to="/hiragana" className="text-light nav-link">Hiragana</Link>
          <Link to="/katakana" className="text-light nav-link">Katakana</Link>
          <Link to="/kanji" className="text-light nav-link">Kanji</Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </header>
);
