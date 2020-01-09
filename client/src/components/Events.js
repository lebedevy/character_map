import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    container: {
        display: 'flex',
        minHeight: '200px',
        border: 'solid 1px #ffffff20',
        margin: '5px',
    },
});

export default function Events({ children }) {
    const classes = useStyles();
    return <div className={classes.container}>{children}</div>;
}
