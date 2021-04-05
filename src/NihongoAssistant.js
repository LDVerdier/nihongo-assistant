import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import KanaGrid from './components/KanaGrid';
import Quiz from './components/Quiz';
import Footer from './components/Footer';

import './assets/css/bootstrap.min.css';
import './styles/index.scss';
import syllabary from './data/Syllabary';

function NihongoAssistant() {
  return (
    <Router>
      <Header />
      <div className="main">
        <Route
          path="/"
          exact
          render={() => <Home />}
        />
        <Route
          path="/hiragana"
          render={() => <KanaGrid syllabary={syllabary} kanaType="hiragana" />}
        />
        <Route
          path="/katakana"
          render={() => <KanaGrid syllabary={syllabary} kanaType="katakana" />}
        />
        <Route
          path="/kanji"
          render={() => (
            <>
              <h2>Page en construction...</h2>
            </>
          )}
        />
        <Route
          path="/entrainement"
          render={() => <Quiz syllabary={syllabary} />}
        />
      </div>
      <Footer />
    </Router>
  );
}

export default NihongoAssistant;
