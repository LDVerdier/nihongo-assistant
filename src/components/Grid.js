import {Cell} from './Cell'

export const Grid = ({syllabary}) => {

    const kanaType = 'hiragana';

    const syllablesFamiliesKeys = Object.keys(syllabary);

    return (
        <table>
            <tbody>
                {
                    //for each family key (vowel, k, s...)
                    syllablesFamiliesKeys.map((syllablesFamilyKey, index) => { 
                    //collect the syllables keys (a, i u, e, o)
                    const syllablesKeys  = Object.keys(syllabary[syllablesFamilyKey]);
                    //and return a table row
                    return (
                        <tr key={index}>
                            {
                                //for each syllable key (a i u e o)
                                syllablesKeys.map((syllableKey, index) => {
                                    //return a Cell (<td> element) with the proper kana to display
                                    console.log(index);
                                    const syllable = syllabary[syllablesFamilyKey][syllableKey][kanaType];
                                    return <Cell key={index} syllable={syllable} />
                                })
                            }
                        </tr>
                        )
                    })
                }
            
            </tbody>
        </table>
    )
}

//afficher le nom de la première clé (vowels)
//créer un tableau
//const syllablesFamilies = Object.keys(syllabary); contient les clés vowels, k, s...
//pour chaque élément de row
//for (const syllablesFamily of syllablesFamilies)
//const syllables  = Object.keys(syllabary[syllablesFamily]); contient les clés a, e, i
//for (const syllable of syllables)
//<Cell syllable={syllable}/>