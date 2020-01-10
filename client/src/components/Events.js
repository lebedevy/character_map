import React, { useState, useEffect } from 'react';
import { makeStyles, CircularProgress } from '@material-ui/core';
import Event from './Event';
import { connect } from 'react-redux';
import CharacterSearch from './CharacterSearch';

const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        minHeight: '200px',
        border: 'solid 1px #ffffff20',
        margin: '5px',
    },
    events: {
        display: 'flex',
        flexWrap: 'wrap',
    },
});

function Events({ events, characters }) {
    const classes = useStyles();
    const [sort, setSort] = useState('Insert Order');
    const [eventsSorted, setEvents] = useState(null);
    const [filter, setFilter] = useState(null);

    console.log(characters);
    console.log(classes);

    useEffect(() => {
        setEvents(events.slice());
    }, []);

    useEffect(() => {
        if (sort === 'Date') {
            let temp = eventsSorted.slice();
            temp.sort((a, b) => a['date']['year'] - b['date']['year']);
            setEvents(temp);
        }
    }, [sort]);

    useEffect(() => {
        if (filter != null) {
            console.log(filter);
            let temp = eventsSorted.filter(event => event.characters.includes(filter));
            setEvents(temp);
        } else {
            setEvents(events);
        }
    }, [filter]);

    const setCharacter = character => {
        console.log(character);
        setFilter(character ? character.id : null);
    };

    return (
        <div className={classes.container}>
            <label
                style={{ color: 'white', margin: '5px', padding: '5px', background: 'black' }}
                onClick={() => setSort('Date')}
            >
                Date
            </label>
            <CharacterSearch characters={characters} returnChar={setCharacter} />
            <label
                style={{ color: 'white', margin: '5px', padding: '5px', background: 'black' }}
                onClick={() => setFilter(4)}
            >
                Filter
            </label>
            <div className={classes.events}>
                {eventsSorted ? (
                    eventsSorted.map(event => <Event key={event.id} event={event} />)
                ) : (
                    <CircularProgress />
                )}
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    console.log(state.characters);
    const { characters } = state.characters;
    return { characters };
};

export default connect(mapStateToProps)(Events);
