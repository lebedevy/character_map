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
    return (
        <div className={classes.container}>
            <div>
                <label>{`${event.year} `}</label>
                <label>{`${event.month !== null ? getMonth(event.month) : ''} `}</label>
                <label>{`${event.day != null ? event.day : ''}`}</label>
            </div>
            <p>{event.description}</p>
        </div>
    );
}
