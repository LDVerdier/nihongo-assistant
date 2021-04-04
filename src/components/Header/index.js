import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

import { Link } from 'react-router-dom';
import './header.scss';

export default () => (
  <header className="header">
    <Navbar expand="md">
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

    {/* https://www.aleksandrhovhannisyan.com/blog/responsive-navbar-without-bootstrap/

    <nav className="navbar-container container">
      <a href="/" className="home-link">
        <div className="navbar-logo" />
        Website Name
      </a>
      <button type="button" className="navbar-toggle" aria-label="Open navigation menu">
        <span className="icon-bar" />
        <span className="icon-bar" />
        <span className="icon-bar" />
      </button>
      <div className="navbar-menu">
        <ul className="navbar-links">
          <li className="navbar-item"><a className="navbar-link" href="/about">About</a></li>
          <li className="navbar-item"><a className="navbar-link" href="/blog">Blog</a></li>
          <li className="navbar-item"><a className="navbar-link" href="/careers">Careers</a></li>
          <li className="navbar-item"><a className="navbar-link" href="/contact">Contact</a></li>
        </ul>
      </div>
    </nav> */}
  </header>
);
