/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';

import { FaFacebookSquare, FaLinkedin, FaGithubSquare } from 'react-icons/fa';

export default () => (
  <footer className="text-center bg-secondary text-light pt-3 pb-2 mt-auto">
    <div className="mb-2">
      <a className="social-network-link" href="https://www.facebook.com/laurent.verdier.925" target="_blank" rel="noreferrer"><FaFacebookSquare style={{ color: 'white', fontSize: '1.5em' }} /></a>
      <a className="social-network-link" href="https://www.linkedin.com/in/lverdier" target="_blank" rel="noreferrer"><FaLinkedin style={{ color: 'white', fontSize: '1.5em' }} /></a>
      <a className="social-network-link" href="https://github.com/LDVerdier/nihongo-assistant" target="_blank" rel="noreferrer"><FaGithubSquare style={{ color: 'white', fontSize: '1.5em' }} /></a>
    </div>
    <p>Nihongo Assistant &copy; 2021</p>
  </footer>
);
