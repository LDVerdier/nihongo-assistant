import {Header} from './components/Header'
import {Grid} from './components/Grid'
import {Footer} from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

    const syllabary = {
        vowels : {
            a: {
                hiragana: 'あ',
                katakana: 'ア'
            },
            i: {
                hiragana: 'い',
                katakana: 'イ'
            },
            u: {
                hiragana: 'う',
                katakana: 'ウ'
            },
            e: {
                hiragana: 'え',
                katakana: 'エ'
            },
            o: {
                hiragana: 'お',
                katakana: 'オ'
            },
        },
        k : {
            ka: {
                hiragana: 'か',
                katakana: 'カ'
            },
            ki: {
                hiragana: 'き',
                katakana: 'キ'
            },
            ku: {
                hiragana: 'く',
                katakana: 'ク'
            },
            ke: {
                hiragana: 'け',
                katakana: 'ケ'
            },
            ko: {
                hiragana: 'こ',
                katakana: 'コ'
            },
        },
        y : {
            ya: {
                hiragana: 'か',
                katakana: 'カ'
            },
            yu: {
                hiragana: 'く',
                katakana: 'ク'
            },
            yo: {
                hiragana: 'こ',
                katakana: 'コ'
            },
        },
    };

  return (
    <>
      <Header />
      <Grid syllabary={syllabary}/>
      <Footer />
    </>
  );
}

export default App;
