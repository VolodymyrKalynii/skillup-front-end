import {createSlice} from '@reduxjs/toolkit';

const sliceConfig = {
    name: 'counterReducer', // имя среза store
    initialState: { // объект начального состояния
        number: 0
    },
    reducers: {// объект функций reducers
        increment: (state) => {
            state.number += 1;
        },
        decrement: (state) => {
            state.number -= 1;
        },
        addRnd: (state, action) => {
            state.number += action.payload;
        },
        setInputNumber: (state, action) => {
            state.number = action.payload;
        }
    }
};

export const {reducer, actions} = createSlice(sliceConfig);