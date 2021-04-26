import {ActionTypes} from '../action-types/number-action-types';

const initState = {
    number: 0
};

export const numberReducer = (state = initState, action) => {
    switch (action.type) {
        case ActionTypes.INC:
            return {
                ...state,
                number: state.number + 1
            };
        case ActionTypes.DEC:
            return {
                ...state,
                number: state.number - 1
            };
        case ActionTypes.RND:
            return {
                ...state,
                number: state.number + action.payload
            };
        case ActionTypes.SET_INPUT_NUMBER:
            return {
                ...state,
                number: action.payload
            };
        default:
            return state;
    }
};