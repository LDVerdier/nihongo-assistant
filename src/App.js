import {Header} from './components/Header'
import {Grid} from './components/Grid'
import {Footer} from './components/Footer'
// import {Translation} from './components/Translation'
import {BrowserRouter as Router, Route} from 'react-router-dom'
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
        s : {
            sa: {
                hiragana: 'さ',
                katakana: 'サ'
            },
            shi: {
                hiragana: 'し',
                katakana: 'シ'
            },
            su: {
                hiragana: 'す',
                katakana: 'ス'
            },
            se: {
                hiragana: 'せ',
                katakana: 'セ'
            },
            so: {
                hiragana: 'そ',
                katakana: 'ソ'
            },
        },
        t : {
            ta: {
                hiragana: 'た',
                katakana: 'タ'
            },
            chi: {
                hiragana: 'ち',
                katakana: 'チ'
            },
            tsu: {
                hiragana: 'つ',
                katakana: 'ツ'
            },
            te: {
                hiragana: 'て',
                katakana: 'テ'
            },
            to: {
                hiragana: 'と',
                katakana: 'ト'
            },
        },
        n : {
            na: {
                hiragana: 'な',
                katakana: 'ナ'
            },
            ni: {
                hiragana: 'に',
                katakana: 'ニ'
            },
            nu: {
                hiragana: 'ぬ',
                katakana: 'ヌ'
            },
            ne: {
                hiragana: 'ね',
                katakana: 'ネ'
            },
            no: {
                hiragana: 'の',
                katakana: 'ノ'
            },
        },
        h : {
            ha: {
                hiragana: 'は',
                katakana: 'ハ'
            },
            hi: {
                hiragana: 'ひ',
                katakana: 'ヒ'
            },
            hu: {
                hiragana: 'ふ',
                katakana: 'フ'
            },
            he: {
                hiragana: 'へ',
                katakana: 'ヘ'
            },
            ho: {
                hiragana: 'ほ',
                katakana: 'ホ'
            },
        },
        m : {
            ma: {
                hiragana: 'ま',
                katakana: 'マ'
            },
            mi: {
                hiragana: 'み',
                katakana: 'ミ'
            },
            mu: {
                hiragana: 'む',
                katakana: 'ム'
            },
            me: {
                hiragana: 'め',
                katakana: 'メ'
            },
            mo: {
                hiragana: 'も',
                katakana: 'モ'
            },
        },
        y : {
            ya: {
                hiragana: 'や',
                katakana: 'ヤ'
            },
            yi: {
                hiragana: '',
                katakana: ''
            },
            yu: {
                hiragana: 'ゆ',
                katakana: 'ユ'
            },
            ye: {
                hiragana: '',
                katakana: ''
            },
            yo: {
                hiragana: 'よ',
                katakana: 'ヨ'
            },
        },
        r : {
            ra: {
                hiragana: 'ら',
                katakana: 'ラ'
            },
            ri: {
                hiragana: 'り',
                katakana: 'リ'
            },
            ru: {
                hiragana: 'る',
                katakana: 'ル'
            },
            re: {
                hiragana: 'れ',
                katakana: 'レ'
            },
            ro: {
                hiragana: 'ろ',
                katakana: 'ロ'
            },
        },
        w : {
            wa: {
                hiragana: 'わ',
                katakana: 'ワ'
            },
            wi: {
                hiragana: '',
                katakana: ''
            },
            wu: {
                hiragana: '',
                katakana: ''
            },
            we: {
                hiragana: '',
                katakana: ''
            },
            wo: {
                hiragana: 'を',
                katakana: 'ヲ'
            },
        },    
        un : {
            n: {
                hiragana: 'ん',
                katakana: 'ン'
            },
            uni: {
                hiragana: '',
                katakana: ''
            },
            unu: {
                hiragana: '',
                katakana: ''
            },
            un: {
                hiragana: '',
                katakana: ''
            },
            uno: {
                hiragana: '',
                katakana: ''
            },
        },
    };

  return (
    <Router>
            <Header />
            <div className="container">

                <Route path='/'
                exact
                render = {() => {
                    return <div className="col-12 col-md-6 mx-auto text-center p-5">
                    <h2>Bienvenue !</h2>
                    <p>N'hésitez pas à consulter les tableaux de kana !</p>
                    </div>
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
