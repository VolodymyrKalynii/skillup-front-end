import {incAction, decAction, rndAction, setInputNumberAction} from './actions';
import {store} from './store';

const {dispatch} = store;

export const incDispatcher = () => dispatch(incAction());
export const decDispatcher = () => dispatch(decAction());
export const rndDispatcher = (rndNumber) => dispatch(rndAction(rndNumber));
export const setInputNumberDispatcher = (rndNumber) => dispatch(setInputNumberAction(rndNumber));