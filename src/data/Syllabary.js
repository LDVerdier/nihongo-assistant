export default [
  {
    id: 1,
    sound: 'vowels',
    syllables: [
      {
        id: 1,
        hiragana: 'あ',
        katakana: 'ア',
        sound: 'a',
        pronunciation: 'a',
      },
      {
        id: 2,
        hiragana: 'い',
        katakana: 'イ',
        sound: 'i',
        pronunciation: 'i',
      },
    ],
  },
  {
    id: 2,
    sound: 'k',
    syllables: [
      {
        id: 1,
        hiragana: 'か',
        katakana: 'カ',
        sound: 'a',
        pronunciation: 'ka',
      },
      {
        id: 2,
        hiragana: 'き',
        katakana: 'キ',
        sound: 'i',
        pronunciation: 'ki',
      },
    ],
  },
];

// export const syllabary = [
//   [
//     {
//       id: 1,
//       pronunciation: 'a',
//       hiragana: 'あ',
//       katakana: 'ア',
//       sound: 'a'
//     },
//     {
//       id: 2,
      // pronunciation: 'i',
      // hiragana: 'い',
      // katakana: 'イ',
//       sound: 'i'
//     },
//     {
//       id: 3,
//       pronunciation: 'u',
//       hiragana: 'う',
//       katakana: 'ウ',
//       sound: 'u'
//     },
//     {
//       id: 4,
//       pronunciation: 'e',
//       hiragana: 'え',
//       katakana: 'エ',
//       sound: 'e'
//     },
//     {
//       id: 5,
//       pronunciation: 'o',
//       hiragana: 'お',
//       katakana: 'オ',
//       sound: 'o'
//     },
//   ],
//   [{
//       id: 6,
//       pronunciation: 'ka',
//       hiragana: 'か',
//       katakana: 'カ',
//       sound: 'a'
//     },
//     {
//       id: 7,
//       pronunciation: 'ki',
//       hiragana: 'き',
//       katakana: 'キ',
//       sound: 'i'
//     },
//     {
//       id: 8,
//       pronunciation: 'ku',
//       hiragana: 'く',
//       katakana: 'ク',
//       sound: 'u'
//     },
//     {
//       id: 9,
//       pronunciation: 'ke',
//       hiragana: 'け',
//       katakana: 'ケ',
//       sound: 'e'
//     },
//     {
//       id: 10,
//       pronunciation: 'ko',
//       hiragana: 'こ',
//       katakana: 'コ',
//       sound: 'o'
//     },
//   ],
// ];

// const syll = {
//   vowels: {
//     a: {
//       hiragana: 'あ',
//       katakana: 'ア'
//     },
//     i: {
//       hiragana: 'い',
//       katakana: 'イ'
//     },
//     u: {
//       hiragana: 'う',
//       katakana: 'ウ'
//     },
//     e: {
//       hiragana: 'え',
//       katakana: 'エ'
//     },
//     o: {
//       hiragana: 'お',
//       katakana: 'オ',
//     },
//   },
//   k: {
//     ka: {
//       hiragana: 'か',
//       katakana: 'カ',
//     },
//     ki: {
//       hiragana: 'き',
//       katakana: 'キ',
//     },
//     ku: {
//       hiragana: 'く',
//       katakana: 'ク',
//     },
//     ke: {
//       hiragana: 'け',
//       katakana: 'ケ',
//     },
//     ko: {
//       hiragana: 'こ',
//       katakana: 'コ',
//     },
//   },
//   s: {
//     sa: {
//       hiragana: 'さ',
//       katakana: 'サ'
//     },
//     shi: {
//       hiragana: 'し',
//       katakana: 'シ'
//     },
//     su: {
//       hiragana: 'す',
//       katakana: 'ス'
//     },
//     se: {
//       hiragana: 'せ',
//       katakana: 'セ'
//     },
//     so: {
//       hiragana: 'そ',
//       katakana: 'ソ'
//     },
//   },
//   t: {
//     ta: {
//       hiragana: 'た',
//       katakana: 'タ'
//     },
//     chi: {
//       hiragana: 'ち',
//       katakana: 'チ'
//     },
//     tsu: {
//       hiragana: 'つ',
//       katakana: 'ツ'
//     },
//     te: {
//       hiragana: 'て',
//       katakana: 'テ'
//     },
//     to: {
//       hiragana: 'と',
//       katakana: 'ト'
//     },
//   },
//   n: {
//     na: {
//       hiragana: 'な',
//       katakana: 'ナ'
//     },
//     ni: {
//       hiragana: 'に',
//       katakana: 'ニ'
//     },
//     nu: {
//       hiragana: 'ぬ',
//       katakana: 'ヌ'
//     },
//     ne: {
//       hiragana: 'ね',
//       katakana: 'ネ'
//     },
//     no: {
//       hiragana: 'の',
//       katakana: 'ノ'
//     },
//   },
//   h: {
//     ha: {
//       hiragana: 'は',
//       katakana: 'ハ'
//     },
//     hi: {
//       hiragana: 'ひ',
//       katakana: 'ヒ'
//     },
//     hu: {
//       hiragana: 'ふ',
//       katakana: 'フ'
//     },
//     he: {
//       hiragana: 'へ',
//       katakana: 'ヘ'
//     },
//     ho: {
//       hiragana: 'ほ',
//       katakana: 'ホ'
//     },
//   },
//   m: {
//     ma: {
//       hiragana: 'ま',
//       katakana: 'マ'
//     },
//     mi: {
//       hiragana: 'み',
//       katakana: 'ミ'
//     },
//     mu: {
//       hiragana: 'む',
//       katakana: 'ム'
//     },
//     me: {
//       hiragana: 'め',
//       katakana: 'メ'
//     },
//     mo: {
//       hiragana: 'も',
//       katakana: 'モ'
//     },
//   },
//   y: {
//     ya: {
//       hiragana: 'や',
//       katakana: 'ヤ'
//     },
//     yi: {
//       hiragana: '',
//       katakana: ''
//     },
//     yu: {
//       hiragana: 'ゆ',
//       katakana: 'ユ'
//     },
//     ye: {
//       hiragana: '',
//       katakana: ''
//     },
//     yo: {
//       hiragana: 'よ',
//       katakana: 'ヨ'
//     },
//   },
//   r: {
//     ra: {
//       hiragana: 'ら',
//       katakana: 'ラ'
//     },
//     ri: {
//       hiragana: 'り',
//       katakana: 'リ'
//     },
//     ru: {
//       hiragana: 'る',
//       katakana: 'ル'
//     },
//     re: {
//       hiragana: 'れ',
//       katakana: 'レ'
//     },
//     ro: {
//       hiragana: 'ろ',
//       katakana: 'ロ'
//     },
//   },
//   w: {
//     wa: {
//       hiragana: 'わ',
//       katakana: 'ワ'
//     },
//     wi: {
//       hiragana: '',
//       katakana: ''
//     },
//     wu: {
//       hiragana: '',
//       katakana: ''
//     },
//     we: {
//       hiragana: '',
//       katakana: ''
//     },
//     wo: {
//       hiragana: 'を',
//       katakana: 'ヲ'
//     },
//   },
//   un: {
//     n: {
//       hiragana: 'ん',
//       katakana: 'ン'
//     },
//     uni: {
//       hiragana: '',
//       katakana: ''
//     },
//     unu: {
//       hiragana: '',
//       katakana: ''
//     },
//     un: {
//       hiragana: '',
//       katakana: ''
//     },
//     uno: {
//       hiragana: '',
//       katakana: ''
//     },
//   },
// };
