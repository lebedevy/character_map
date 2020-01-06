import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    button: {
        borderRadius: '50%',
        height: '80px',
        width: '80px',
        border: '1px solid #ffffff',
        margin: '10px',
    },
});

export default function Period({ action }) {
    const classes = useStyles();
    return (
        <button className={classes.button} onClick={action}>
            Add
        </button>
    );
}
