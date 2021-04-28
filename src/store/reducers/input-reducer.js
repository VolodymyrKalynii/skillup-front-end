/* eslint-disable no-param-reassign */
import {createSlice} from '@reduxjs/toolkit';

const sliceConfig = {
    name: 'inputValue', // имя среза store
    initialState: { // объект начального состояния
        inputValue: ''
    },
    reducers: {// объект функций reducers
        setInputValue: (state, action) => {
            state.inputValue = action.payload;
        }
    }
};

export const {reducer, actions} = createSlice(sliceConfig);

// const initState = {
//     inputValue: ''
// };

// export const inputReducer = (state = initState, action) => {
//     switch (action.type) {
//         case ActionTypes.SET_INPUT_VALUE:
//             return {
//                 ...state,
//                 inputValue: action.payload
//             };
//         default:
//             return state;
//     }
// };