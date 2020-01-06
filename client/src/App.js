import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import logo from './logo.svg';
import './App.css';
import Period from './components/Period';
import AddButton from './components/AddButton';

const useStyles = makeStyles({
    container: {
        background: '#282c34',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
    },
    header: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        '& h1': {
            textAlign: 'center',
            color: '#ffffff',
        },
    },
});

function App() {
    const classes = useStyles();
    const [periods, setPeriods] = useState([0]);

    function addPeriod() {
        const per = periods.slice();
        per.push(0);
        setPeriods(per);
    }

    return (
        <div className={classes.container}>
            <header className={classes.header}>
                <h1>Character Map</h1>
                <ViewType />
            </header>
            {periods.map(el => (
                <Period />
            ))}
            {/* <AddButton action={addPeriod} /> */}
        </div>
    );
}

export default App;

const viewUseStyles = makeStyles({
    viewType: {
        margin: '10px',
        '& label': {
            color: '#ffffff',
            padding: '5px',
            margin: '0 5px',
            display: 'inline-block',
            '&:hover': {
                background: '#00000090',
            },
        },
    },
});

function ViewType() {
    const classes = viewUseStyles();
    return (
        <div className={classes.viewType}>
            <label>Relationships</label>
            <label>Groups</label>
        </div>
    );
}
