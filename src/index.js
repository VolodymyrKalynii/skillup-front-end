import {incDispatcher, decDispatcher, rndDispatcher, setInputNumberDispatcher} from './store/dispatchers/number-dispatchers';
import {setInputValueDispatcher} from './store/dispatchers/input-dispatchers';
import {store} from './store/store';

const {subscribe, getState} = store;

const field = document.getElementById('field');
const field2 = document.getElementById('field2');
const incBTN = document.getElementById('inc');
const decBTN = document.getElementById('dec');
const rndBTN = document.getElementById('rnd');
const mainInput = document.getElementById('main-input');
const cardInput = document.getElementById('card-input');

field.innerHTML = getState().numberReducer.value;

subscribe(() => {
    field.innerHTML = getState().numberReducer.value;
    // field2.innerHTML = getState().inputReducer.inputValue;
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

mainInput.addEventListener('input', (e) => {
    const {value} = e.target;
    console.log(value);

    setInputNumberDispatcher(+value);
    // rndDispatcher(rndNumber);
});

cardInput.addEventListener('input', (e) => {
    const {value} = e.target;
    console.log(value);

    setInputValueDispatcher(value);
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