import React, { useState, useEffect } from 'react';
import { makeStyles, CircularProgress } from '@material-ui/core';
import Event from './Event';

const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '200px',
        border: 'solid 1px #ffffff20',
        margin: '5px',
    },
    events: {
        display: 'flex',
        flexWrap: 'wrap',
    },
});

export default function Events({ events }) {
    const classes = useStyles();
    const [sort, setSort] = useState('Insert Order');
    const [eventsSorted, setEvents] = useState(null);
    const [filter, setFilter] = useState(null);

    useEffect(() => {
        console.log(events);
        setEvents(events.slice());
    }, []);

    useEffect(() => {
        console.log(events);
        if (sort === 'Date') {
            let temp = eventsSorted.slice();
            temp.sort((a, b) => a['date']['year'] - b['date']['year']);
            console.log(temp);
            setEvents(temp);
        }
    }, [sort]);

    useEffect(() => {
        if (filter) {
            let temp = eventsSorted.filter(event => event.characters.includes(filter));
            console.log(temp);
            setEvents(temp);
        }
    }, [filter]);

    return (
        <div className={classes.container}>
            <label
                style={{ color: 'white', margin: '5px', padding: '5px', background: 'black' }}
                onClick={() => setSort('Date')}
            >
                Date
            </label>
            <label
                style={{ color: 'white', margin: '5px', padding: '5px', background: 'black' }}
                onClick={() => setFilter(4)}
            >
                Filter
            </label>
            <div className={classes.events}>
                {eventsSorted ? (
                    eventsSorted.map(event => {
                        console.log(event.date.year);
                        return <Event key={event.id} event={event} />;
                    })
                ) : (
                    <CircularProgress />
                )}
            </div>
        </div>
    );
}
