import {setInputValueAction} from '../actions/input-actions';
import {store} from '../store';

const {dispatch} = store;

export const setInputValueDispatcher = (str) => dispatch(setInputValueAction(str));