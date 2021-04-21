import {ActionTypes} from './action-types';

const initState = 0;

export const reducer = (state = initState, action) => {
    switch (action.type) {
        case ActionTypes.INC:
            return state + 1;
        case ActionTypes.DEC:
            return state - 1;
        case ActionTypes.RND:
            return state + action.payload;
        case ActionTypes.SET_INPUT_NUMBER:
            return action.payload;
        default:
            return state;
    }
};