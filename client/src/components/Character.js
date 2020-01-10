import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import AddButton from './AddButton';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';

const useStyles = makeStyles({
    character: {
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '10px',
        height: '150px',
        width: '150px',
        minWidth: '150px',
        border: '1px solid #ffffff',
        background: '#ffffff20',
        borderRadius: '50%',
        overflow: 'hidden',
        '&:hover': {
            background: '#ffffff60',
        },
        '&:hover:after': {
            content: '"Details"',
            fontWeight: 'bold',
            color: 'black',
            background: 'white',
            fontSize: '1.1em',
            position: 'absolute',
            zIndex: 2,
            padding: '10px',
        },
        '& svg': {
            color: 'white',
        },
        '& label': {
            zIndex: 1,
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
    img: {
        index: 0,
        // position: 'absolute',
        position: 'absolute',
        top: 0,
    },
});

export default function Character({ character }) {
    const classes = useStyles();
    const [details, setDetails] = useState(false);
    return (
        <React.Fragment>
            <div className={classes.character} onClick={e => setDetails(!details, e.target)}>
                {character.img ? (
                    <img className={classes.img} src={character.img} alt="Profile" />
                ) : (
                    <PermIdentityIcon fontSize="large" />
                )}
                <label>{`${character.first} ${character.middle ? character.middle : ''} ${
                    character.last
                }`}</label>
            </div>
            {details ? <CharacterDetails character={character} /> : null}
        </React.Fragment>
    );
}
// relationships: married, lovers, friends, acquitances, other
//  enemies, tense
function CharacterDetails({ character }) {
    const classes = useStyles();
    return (
        <div className={classes.details}>
            <h2>Character Details</h2>
            <button>Show Relationships</button>
            <label>{`Name: ${character.first} ${character.middle ? character.middle : ''} ${
                character.last
            }`}</label>
            <label>Birth</label>
            <label>Death</label>
            <label>Details</label>
            <label>Group</label>
            <button>Add relationship</button>
        </div>
    );
}
