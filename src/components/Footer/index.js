/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { FaFacebookSquare, FaLinkedin, FaGithubSquare } from 'react-icons/fa';

import './footer.scss';

export default () => (
  <footer className="footer">
    <div className="footer__linkgroup">
      <a className="footer__link" href="https://www.facebook.com/laurent.verdier.925" target="_blank" rel="noreferrer"><FaFacebookSquare className="footer__link__icon" /></a>
      <a className="footer__link" href="https://www.linkedin.com/in/lverdier" target="_blank" rel="noreferrer"><FaLinkedin className="footer__link__icon" /></a>
      <a className="footer__link" href="https://github.com/LDVerdier/nihongo-assistant" target="_blank" rel="noreferrer"><FaGithubSquare className="footer__link__icon" /></a>
    </div>
    <p>Nihongo Assistant &copy; 2021</p>
  </footer>
);
