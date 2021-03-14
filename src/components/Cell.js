
export const Cell = ({ syllable }) => {
    return (
        <td className={"cell " + (syllable ? '' : 'empty')}>
            {syllable}
        </td>
    )
};

