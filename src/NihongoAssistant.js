import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import KanaGrid from './containers/KanaGrid';
import Quiz from './containers/Quiz';
import Footer from './components/Footer';

import './assets/css/bootstrap.min.css';
import './styles/index.scss';

// console.log(kana.getKanaById(5)['katakana']);

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
          render={() => <KanaGrid kanaType="hiragana" />}
        />
        <Route
          path="/katakana"
          render={() => <KanaGrid kanaType="katakana" />}
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
          render={() => <Quiz />}
        />
      </div>
      <Footer />
    </Router>
  );
}

export default NihongoAssistant;
