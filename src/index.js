import {createStore} from 'redux';

console.log('hallo');

const initState = 0;

// initState Обязательно
const reducer = (state = initState, action) => {
 
    switch (action.type) {
        case 'INC':
            return state + 1;
            break;
        case 'DEC':
            return state - 1;
            break;
        default: // Обязательно
            return state;
    }
};

// let state = reducer(initState, {type: 'INC'});

// console.log(state);

// state = reducer(state, {type: 'INC'});

// console.log(state);

// state = reducer(state, {type: 'INC'});

const store = createStore(reducer);

console.log(store.getState());