import {createSlice} from '@reduxjs/toolkit';

const sliceConfig = {
    name: 'counter', // имя среза store
    initialState: { // объект начального состояния
        value: 0
    },
    reducers: {// объект функций reducers
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        addRnd: (state, action) => {
            state.value += action.payload;
        },
        setInputNumber: (state, action) => {
            state.value = action.payload;
        }
    }
};

const numberReducer = createSlice(sliceConfig); // создание среза
export const actions = numberReducer.actions;
export default numberReducer.reducer;
