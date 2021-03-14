import {Cell} from './Cell'

export const Grid = ({syllabary}) => {
    //TODO kanaType should be dynamic
    const kanaType = 'katakana';
    //collect the keys of each subobject of syllabary object
    const syllableSeriesKeys = Object.keys(syllabary);

    return (
        <table className="mx-auto my-5">
            <tbody>
                {
                    //for each serie key (vowels, k, s...)
                    syllableSeriesKeys.map((syllableSerieKey, i) => { 
                    //collect the syllables keys (a, i u, e, o // ka, ki, ku, ke, ko...)
                    const syllablesKeys  = Object.keys(syllabary[syllableSerieKey]);
                    return (
                        <tr key={i}>
                            {
                                //for each syllable key (a i u e o)
                                syllablesKeys.map((syllableKey, j) => {
                                    //return a Cell (<td> element) with the proper kana to display
                                    const syllable = syllabary[syllableSerieKey][syllableKey][kanaType];
                                    return <Cell key={j} syllable={syllable} />
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

/*objectif : pour les séries défectives (ya yu yo par ex.)
créer des cellules vides dans la colonne défective
Solution 1 :
const rowVowels = ['a','i','u','e','o'];
dans les éléments tr ne pas boucler sur syllablesKeys mais sur rowVowels
si la derniere lettre de la clé ka ki ku... est égale à rowVowel
afficher <Cell syllable={syllable} />
sinon afficher <Cell syllable={''} />
*/