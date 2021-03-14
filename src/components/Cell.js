import { useState } from 'react'

export const Cell = ({ syllable, pronunciation }) => {
    const [hidePronunciation, setHidePronunciation] = useState(true);

    const togglePronunciation = () => {
        if(syllable !== ''){
            console.log('click on ' + syllable);
            setHidePronunciation(!hidePronunciation);
        }
    };

    const displaySyllable = () => {
        setTimeout(setHidePronunciation, 500, true)
        ;
    };
    return (
        <td className={"cell " + (syllable ? '' : 'empty')}
        onDoubleClick={togglePronunciation}
        onMouseLeave={displaySyllable}
        style={{cursor: syllable && 'pointer'}}
        >
            {hidePronunciation ? syllable : pronunciation} 
        </td>
    )
};

