import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import Grid from './components/Grid';
import Footer from './components/Footer';
// import {Translation} from './components/Translation'
import './assets/css/bootstrap.min.css';
import syllabary from './data/Syllabary';

function NihongoAssistant() {
  return (
    <Router>
      <Header />
      <div className="container">
        <Route
          path="/"
          exact
          render={() => <Home />}
        />
        <Route
          path="/hiragana"
          render={() => <Grid syllabary={syllabary} kanaType="hiragana" />}
        />
        <Route
          path="/katakana"
          render={() => <Grid syllabary={syllabary} kanaType="katakana" />}
        />
        <Route
          path="/kanji"
          render={() => (
            <>
              <h2>Page en construction...</h2>
            </>
          )}
        />
      </div>
      <Footer />
    </Router>
  );
}

export default NihongoAssistant;
