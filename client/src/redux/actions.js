import { SET_CHARACTERS, SET_EVENTS } from './actionTypes';

export const setCharacters = characters => ({
    type: SET_CHARACTERS,
    payload: {
        characters,
    },
});

export const setEvents = events => ({
    type: SET_EVENTS,
    payload: {
        events,
    },
});
