import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import AddButton from './AddButton';

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

class CharacterData {
    constructor(name) {
        this.name = name;
    }
}

export default function Period() {
    const classes = useStyles();
    const [characters, setCharacters] = useState([new Character('')]);

    function addCharacter() {
        const chars = characters.slice();
        chars.push(new CharacterData(''));
        setCharacters(chars);
    }

    return (
        <div className={classes.container}>
            <AddButton action={addCharacter} />
            <div className={classes.charContainer}>
                {characters.map(el => (
                    <Character />
                ))}
            </div>
        </div>
    );
}

const charUseStyles = makeStyles({
    character: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '10px',
        minHeight: '150px',
        minWidth: '150px',
        border: '1px solid #ffffff',
        background: '#ffffff20',
        borderRadius: '50%',
        '&:hover': {
            background: '#ffffff60',
        },
        '&:hover:after': {
            content: '"Details"',
            fontWeight: 'bold',
            fontSize: '1.1em',
        },
    },
    details: {
        height: '220px',
        width: '220px',
        background: 'gray',
        display: 'flex',
        flexDirection: 'column',
        '& h2': {
            margin: 0,
        },
    },
});

function Character({}) {
    const classes = charUseStyles();
    const [details, setDetails] = useState(true);
    return (
        <React.Fragment>
            <div className={classes.character} onClick={e => setDetails(!details, e.target)} />
            {details ? <CharacterDetails /> : null}
        </React.Fragment>
    );
}
// relationships: married, lovers, friends, acquitances, other
//  enemies, tense
function CharacterDetails() {
    const classes = charUseStyles();
    return (
        <div className={classes.details}>
            <h2>Character Details</h2>
            <button>Show Relationships</button>
            <label>Name</label>
            <label>Birth</label>
            <label>Death</label>
            <label>Details</label>
            <label>Group</label>
            <button>Add relationship</button>
        </div>
    );
}
