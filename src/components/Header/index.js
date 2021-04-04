import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

import { Link } from 'react-router-dom';

export default () => (
  <header>
    <Navbar bg="secondary" expand="md">
      <Link to="/" className="text-light">Nihongo Assistant</Link>
      {/* <Navbar.Brand className="text-light" href="#home">Nihongo Assistant</Navbar.Brand> */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {/* //! BUG : balsie link dans nav.link crée warning */}
          {/* <Nav.Link><Link to="/hiragana" className="text-light">Hiragana</Link></Nav.Link>
          <Nav.Link><Link to="/katakana" className="text-light">Katakana</Link></Nav.Link>
          <Nav.Link><Link to="/kanji" className="text-light">Kanji</Link></Nav.Link> */}
          <Link to="/hiragana" className="text-light">Hiragana</Link>
          <Link to="/katakana" className="text-light">Katakana</Link>
          <Link to="/kanji" className="text-light">Kanji</Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </header>
);
