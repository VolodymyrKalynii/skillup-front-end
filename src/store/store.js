import {configureStore} from '@reduxjs/toolkit';

import {reducer} from './reducers';

const logMiddleware = () => (dispatch) => (action) => {
    console.log(action);

    return dispatch(action);
};

export const store = configureStore({
    reducer,
    middleware: [logMiddleware]
});