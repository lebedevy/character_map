import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import AddButton from './AddButton';
import Character from './Character';
import { CharacterData } from '../data/data';

const useStyles = makeStyles({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // height: '250px',
        margin: '0 5px',
        border: '1px solid #ffffff20',
    },
    charContainer: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        // height: '100%',
        borderLeft: '1px solid #ffffff15',
        // overflow: 'auto',
        // '& ::-webkit-scrollbar': {
        //     width: '5px',
        // },
    },
});

export default function Period({ children }) {
    const classes = useStyles();
    const [characters, setCharacters] = useState([new CharacterData('')]);

    function addCharacter() {
        const chars = characters.slice();
        chars.push(new CharacterData(''));
        setCharacters(chars);
        console.log(chars);
    }

    return (
        <div className={classes.container}>
            {/* <AddButton action={addCharacter} />
            <div className={classes.charContainer}>
                {characters.map(el => (
                    <Character character={el} />
                ))}
            </div> */}
            {children}
        </div>
    );
}
