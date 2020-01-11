import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './App.css';
import Period from './components/Period';
import Character from './components/Character';
import Events from './components/Events';
import { CharacterData, EventData, EventDate } from './data/data';
import { connect } from 'react-redux';
import { setCharacters, setEvents } from './redux/actions';

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
    new CharacterData(6, 'Alios', null, 'Hitler'),
    new CharacterData(7, 'Angela', null, 'Hitler'),
    new CharacterData(8, 'Klara', null, 'Polzl'),
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
    new EventData(7, new EventDate(1882), 'Anna dies', [4]),
    new EventData(8, new EventDate(1880), 'Alios divorces Anna', [3, 4]),
    new EventData(9, new EventDate(1881), 'Fanni births son Alios to Alios, out of wedlock', [
        5,
        6,
    ]),
    new EventData(10, new EventDate(1883), 'Fanni births daughter Angela', [5, 7]),
    new EventData(11, new EventDate(1883), 'Fanni catches TB', [5]),
    new EventData(12, new EventDate(1883), 'Alios begins affair with Klara Polzl', [3, 8]),
    new EventData(13, new EventDate(1884), 'Fanni dies', [5]),
    new EventData(
        14,
        new EventDate(1884),
        'Alios pettitions to marry Klara (pettion required due to their close familial relations, which caused the priest to refuse to marry them)',
        [3, 8]
    ),
    new EventData(
        15,
        new EventDate(1885),
        "Alios's marriage pettition is approved by the bishop, and they marry",
        [3, 8]
    ),
];

function App({ setCharacters, setEvents }) {
    const classes = useStyles();
    const [periods, setPeriods] = useState([0]);
    const [view, setView] = useState('Events');

    useEffect(() => {
        setCharacters(characters);
        setEvents(events);
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
            {view === 'Events' ? <Events /> : null}
            {periods.map(el => (
                <Period />
            ))}
            {/* <AddButton action={addPeriod} /> */}
        </div>
    );
}

export default connect(null, { setCharacters, setEvents })(App);

const viewUseStyles = makeStyles({
    viewType: {
        margin: '10px',
        '& button': {
            color: 'gray',
            border: 'none',
            background: 'none',
            padding: '5px',
            margin: '0 5px',
            display: 'inline-block',
            // '&:hover': {
            //     background: '#00000090',
            // },
        },
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
            <button disabled onClick={() => setView('Relationships')}>
                Relationships
            </button>
            <button disabled onClick={() => setView('Groups')}>
                Groups
            </button>
            <label onClick={() => setView('Events')}>Events</label>
        </div>
    );
}
