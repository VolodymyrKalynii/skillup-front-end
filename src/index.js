import {incDispatcher, decDispatcher, rndDispatcher, setInputNumberDispatcher} from './store/dispatchers';
import {store} from './store/store';

const {subscribe, getState} = store;

const field = document.getElementById('field');
const incBTN = document.getElementById('inc');
const decBTN = document.getElementById('dec');
const rndBTN = document.getElementById('rnd');
const input = document.getElementById('input');

field.innerHTML = getState();

subscribe(() => {
    field.innerHTML = getState();
});

incBTN.addEventListener('click', () => {
    incDispatcher();
});

decBTN.addEventListener('click', () => {
    decDispatcher();
});

rndBTN.addEventListener('click', () => {
    const rndNumber = Math.floor(Math.random() * 10);

    rndDispatcher(rndNumber);
});

input.addEventListener('input', (e) => {
    const {value} = e.target;
    console.log(value);

    setInputNumberDispatcher(+value);
    // rndDispatcher(rndNumber);
});

// store.dispatch({type: ActionTypes.INC});
// store.dispatch({type: ActionTypes.INC});
// store.dispatch({type: ActionTypes.INC});
// store.dispatch({type: ActionTypes.INC});
// store.dispatch({type: ActionTypes.INC});

// let state = reducer(initState, {});

// state = reducer(state, {type: ActionTypes.INC});
// state = reducer(state, {type: ActionTypes.INC});
// state = reducer(state, {type: ActionTypes.INC});
// state = reducer(state, {type: ActionTypes.INC});
// state = reducer(state, {type: ActionTypes.INC});

// state = reducer(state, {type: ActionTypes.DEC});

// state = reducer(state, {type: ActionTypes.RND, payload: Math.floor(Math.random() * 10)});
// // state = reducer(state, {type: 'RND', payload: 50});

// console.log(state);