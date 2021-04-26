import {createStore, applyMiddleware, combineReducers} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';

import {reducers} from './reducers';

const logMiddleware = ({getState, dispatch}) => (dispatch) => (action) => {
    console.log(action);

    return dispatch(action);
};

// const sendActionMiddleware = ({getState, dispatch}) => (dispatch) => (action) => {
//     console.log('отправка на сервер', action);

//     return dispatch(action);
// };

const rootReducers = combineReducers(reducers);

export const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(logMiddleware)));