import React from 'react';
import { makeStyles } from '@material-ui/core';
import { getMonth } from '../data/data';

const useStyles = makeStyles({
    container: {
        height: '150px',
        width: '150px',
        overflow: 'auto',
        border: '1px solid #ffffff45',
        padding: '5px',
        margin: '10px',
        color: '#ffffff',
        // '& label': {
        //     display: 'block',
        // },
    },
});

export default function Event({ event }) {
    const classes = useStyles();
    const date = event.date;

    return (
        <div className={classes.container}>
            {date ? <EventDate date={date} /> : null}
            <p>{event.description}</p>
        </div>
    );
}

function EventDate({ date }) {
    return (
        <div>
            <label>{`${date.year} `}</label>
            <label>{`${date.month != null ? getMonth(date.month) : ''} `}</label>
            <label>{`${date.day != null ? date.day : ''}`}</label>
        </div>
    );
}
