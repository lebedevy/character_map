import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    container: {
        position: 'relative',
        color: 'white',
        padding: '5px',
        '& label': {
            paddingRight: '5px',
        },
        '& input': {
            width: '200px',
            minWidth: '200px',
        },
    },
    suggestions: {
        position: 'absolute',
        width: '200px',
        // marginTop: '-5px',
        right: '5px',
        bottom: '-195px',
        background: 'white',
        color: 'black',
        display: 'flex',
        flexDirection: 'column',
        height: '200px',
        overflow: 'auto',
        '& ul': {
            listStyleType: 'none',
            margin: 0,
            padding: 0,
        },
        '& li': {
            margin: 0,
            padding: '3px',
            '&:hover': {
                background: '#00000020',
                cursor: 'pointer',
            },
        },
    },
});

function CharacterSearch({ characters, returnChar }) {
    const classes = useStyles();
    const [input, setInput] = useState('');
    const [focused, setFocused] = useState(false);
    const [filtered, setFiltered] = useState(characters.slice());
    const [mouse, setMouse] = useState(false);

    useEffect(() => {
        if (input !== '') {
            filter(input);
        } else {
            setFiltered(characters);
        }
    }, [input]);

    const update = e => {
        console.log(e.target);
        console.log(e.currentTarget);
        if (e.target.value === '') {
            returnChar(null);
        }
        setInput(e.target.value);
    };

    function filter(input) {
        let filtered = characters.filter(el => {
            let name = el.first;
            if (el.middle) name += ' ' + el.middle;
            if (el.last) name += ' ' + el.last;
            name = name.toLowerCase();
            input = input.toLowerCase();
            if (name.includes(input)) return true;
            else return false;
        });
        console.log(filtered);
        setFiltered(filtered);
    }

    return (
        <div
            className={classes.container}
            onBlur={() => {
                console.log('blur');
                setFocused(false);
            }}
            onFocusCapture={() => console.log('focus caputre')}
            onFocusIn={() => console.log('Here')}
            onFocusOut={() => console.log('out')}
        >
            <label>Filter for character</label>
            <input onChange={update} value={input} onFocus={() => setFocused(true)} />
            {focused || mouse ? (
                <div
                    className={classes.suggestions}
                    onMouseEnter={() => setMouse(true)}
                    onMouseLeave={() => setMouse(false)}
                >
                    <ul>
                        {filtered.map(el => {
                            let name = el.first;
                            if (el.middle) name += ' ' + el.middle;
                            if (el.last) name += ' ' + el.last;
                            return (
                                <li
                                    onClick={e => {
                                        console.log(e);
                                        console.log(name);
                                        setMouse(false);
                                        returnChar(el);
                                        setInput(name);
                                    }}
                                >
                                    {name}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            ) : null}
        </div>
    );
}

const mapStateToProps = state => {
    console.log(state.characters);
    const { characters } = state.characters;
    return { characters };
};

export default connect(mapStateToProps)(CharacterSearch);
