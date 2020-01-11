import { SET_EVENTS } from '../actionTypes';

const initialState = {
    events: [],
};

export default function(state = initialState, action) {
    console.log(action);
    switch (action.type) {
        case SET_EVENTS: {
            return {
                events: action.payload.events,
            };
        }
        default:
            return state;
    }
}
