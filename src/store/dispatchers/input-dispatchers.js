import {actions} from '../reducers/input-reducer';
import {store} from '../store';

const {dispatch} = store;
const {setInputValue} = actions;

export const setInputValueDispatcher = (str) => dispatch(setInputValue(str));