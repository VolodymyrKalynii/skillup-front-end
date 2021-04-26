import {configureStore} from '@reduxjs/toolkit';

// import {composeWithDevTools} from 'redux-devtools-extension';

import {reducer} from './reducers';
// import {reducers} from './reducers';

console.log(reducer);

const logMiddleware = ({getState, dispatch}) => (dispatch) => (action) => {
    console.log(action);

    return dispatch(action);
};

// const sendActionMiddleware = ({getState, dispatch}) => (dispatch) => (action) => {
//     console.log('отправка на сервер', action);

//     return dispatch(action);
// };

// const rootReducers = combineReducers(reducers);

export const store = configureStore({reducer});
// export const store = createStore(reducer, applyMiddleware(logMiddleware));