// import {Cell} from './Cell'
import React from 'react';
import Row from '../Row';

const Grid = ({ syllabary, kanaType }) => {
  // console.log(syllabary, kanaType);
  const rows = syllabary.map(({id, syllables}) => (
    <Row key={id} syllables={syllables} kanaType={kanaType} />
  ));
  // console.log(rows);
  return (
    <table className="grid border">
      {rows}
    </table>
  );
};

export default Grid;

// export const Grid = ({syllabary, kanaType}) => {
// ;
//     //collect the keys of each subobject of syllabary object
//     const syllableSeriesKeys = Object.keys(syllabary);

//     return (
//         <div className="mx-auto my-5 col-12 col-md-6">
//             <p className="text-center">Double-cliquez sur une case pour afficher la prononciation !</p>
//             <table className="mx-auto">
//                 <tbody>
//                     {
//                         //for each serie key (vowels, k, s...)
//                         syllableSeriesKeys.map((syllableSerieKey, i) => { 
//                         //collect the syllables keys (a, i u, e, o // ka, ki, ku, ke, ko...)
//                         const syllablesKeys  = Object.keys(syllabary[syllableSerieKey]);
//                         return (
//                             <tr key={i}>
//                                 {
//                                     //for each syllable key (a i u e o)
//                                     syllablesKeys.map((syllableKey, j) => {
//                                         //return a Cell (<td> element) with the proper kana to display
//                                         const syllable = syllabary[syllableSerieKey][syllableKey][kanaType];
//                                         const pronunciation = syllableKey;
//                                         return <Cell key={j} syllable={syllable} pronunciation={pronunciation}/>
//                                     })
//                                 }
                                
//                             </tr>
//                             )
//                         })
//                     }
                
//                 </tbody>
//             </table>
//         </div>
//     )
// }
