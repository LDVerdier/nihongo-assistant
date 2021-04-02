import React from 'react'
import {Header} from './components/Header'
import {Home} from './components/Home'
import Grid from './components/Grid'
import {Footer} from './components/Footer'
// import {Translation} from './components/Translation'
import {BrowserRouter as Router, Route} from 'react-router-dom'
// import 'bootstrap/dist/css/bootstrap.min.css';
import {syllabary} from './data/Syllabary';


function App() {

    

  return (
    <Router>
      <Header />
        <div className="container">
          <Route path='/'
          exact
          render = {() => {
              return <Home />
          }}
          />
          <Route path='/hiragana'
          render = {() => {
              return <Grid syllabary={syllabary} kanaType={'hiragana'}/>
          }}
          />
          <Route path='/katakana'
          render = {() => {
              return <Grid syllabary={syllabary} kanaType={'katakana'}/>
          }}
          />
          <Route path='/kanji'
          render = {() => {
              return <>
              <h2>Page en construction...</h2>
              </>
          }}
          />
        </div>
      
      <Footer />
    </Router>
  );
}

export default App;
