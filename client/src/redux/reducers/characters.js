import { SET_CHARACTERS, ADD_CHARACTER } from '../actionTypes';

const initialState = {
    characters: [],
};

export default function(state = initialState, action) {
    switch (action.type) {
        case SET_CHARACTERS: {
            return {
                characters: action.payload.characters,
            };
        }
        default:
            return state;
    }
}
