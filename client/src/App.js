import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import logo from './logo.svg';
import './App.css';
import Period from './components/Period';
import AddButton from './components/AddButton';
import Character from './components/Character';
import Events from './components/Events';
import Event from './components/Event';
import { CharacterData, EventData, EventDate } from './data/data';
import { connect } from 'react-redux';
import { setCharacters } from './redux/actions';

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

const characters = [
    new CharacterData(0, 'Marie', 'Anna', 'Schichlgruber', null),
    new CharacterData(1, 'Johann', 'Georg', 'Hiedler', null),
    new CharacterData(2, 'Johann', 'Nepomuk', 'Huttler', null),
    new CharacterData(3, 'Alios', null, 'Schichlgruber', '/images/Alois_Hitler.jpg'),
    new CharacterData(4, 'Anna', null, 'Glasl'),
    new CharacterData(5, 'Franziska', null, 'Matzelsberges'),
];

const events = [
    new EventData(
        0,
        new EventDate(1837, 5, 17),
        'Alios Schichlgruber born out of wedlock to Marie Schichlgruber',
        [0, 3]
    ),
    new EventData(
        1,
        new EventDate(1855),
        'Alios gives up trade job to join financial administration of the Austrian monarchy',
        [3]
    ),
    new EventData(2, new EventDate(1875), 'Alios becomes customs official in town of Braunav', [3]),
    new EventData(
        3,
        new EventDate(1876),
        'Johann Nepomuk & 3 witnesses declare Alios as biological son of Johann Georg',
        [2, 3]
    ),
    new EventData(
        4,
        new EventDate(1876),
        "Pastor changes Alios's record to list Georg as father, removes illegitimate birth status",
        [1, 3]
    ),
    new EventData(5, new EventDate(1873), 'Alios marries Anna Glasl, his first marriage', [3, 4]),
    new EventData(6, new EventDate(1883), 'Alios marries Franziska Matzelsberges', [3, 5]),
    new EventData(7, new EventDate(1882), 'Anna dies', [3]),
    new EventData(8, new EventDate(1880), 'Alios divorces Anna', [3, 4]),
];

function App({ setCharacters }) {
    const classes = useStyles();
    const [periods, setPeriods] = useState([0]);
    const [view, setView] = useState('Events');

    useEffect(() => {
        setCharacters(characters);
    }, []);

    function addPeriod() {
        const per = periods.slice();
        per.push(0);
        setPeriods(per);
    }

    return (
        <div className={classes.container}>
            <header className={classes.header}>
                <h1>Character Map</h1>
                <ViewType view={view} setView={setView} />
            </header>
            {view === 'Characters' ? (
                <Period>
                    {characters.map(char => (
                        <Character character={char} />
                    ))}
                </Period>
            ) : null}
            {view === 'Events' ? <Events events={events} /> : null}
            {periods.map(el => (
                <Period />
            ))}
            {/* <AddButton action={addPeriod} /> */}
        </div>
    );
}

export default connect(null, { setCharacters })(App);

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

function ViewType({ setView }) {
    const classes = viewUseStyles();
    return (
        <div className={classes.viewType}>
            <label onClick={() => setView('Characters')}>Characters</label>
            <label onClick={() => setView('Relationships')}>Relationships</label>
            <label onClick={() => setView('Groups')}>Groups</label>
            <label onClick={() => setView('Events')}>Events</label>
        </div>
    );
}
