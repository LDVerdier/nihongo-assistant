import {Cell} from './Cell'

export const Grid = ({syllabary}) => {

    const kanaType = 'katakana';

    const syllablesFamiliesKeys = Object.keys(syllabary);

    return (
        <table>
            <tbody>
                {
                    //for each family key (vowel, k, s...)
                    syllablesFamiliesKeys.map(function(syllablesFamilyKey) { 
                    //collect the syllables keys (a, i u, e, o)
                    const syllablesKeys  = Object.keys(syllabary[syllablesFamilyKey]);
                    //and return a table row
                    return (
                        <tr>
                            {
                                //for each syllable key (a i u e o)
                                syllablesKeys.map((syllableKey) => {
                                    // console.log(syllabary[syllablesFamilyKey][syllableKey]);
                                    //return a Cell (<td> element) with the proper kana to display
                                    // return <Cell syllable={syllabary[syllablesFamilyKey][syllableKey][kanaType]} />
                                    return <Cell syllable={syllabary[syllablesFamilyKey][syllableKey]} />
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