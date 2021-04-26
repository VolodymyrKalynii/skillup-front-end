import {actions} from '../reducers/number-reducer';
import {store} from '../store';

const {dispatch} = store;
const {increment, decrement, addRnd, setInputNumber} = actions;

export const incDispatcher = () => dispatch(increment());
export const decDispatcher = () => dispatch(decrement());
export const rndDispatcher = (rndNumber) => dispatch(addRnd(rndNumber));
export const setInputNumberDispatcher = (rndNumber) => dispatch(setInputNumber(rndNumber));