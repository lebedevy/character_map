import { SET_CHARACTERS } from './actionTypes';

export const setCharacters = characters => ({
    type: SET_CHARACTERS,
    payload: {
        characters,
    },
});
