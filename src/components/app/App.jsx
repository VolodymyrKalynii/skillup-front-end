import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';

import {store} from '../../store/store';
// import {Planets} from '../common/planets';

import {Nav} from '../common/nav';
import {InputFunc} from '../common/input-func';
import {ClickCounterRedux} from '../common/click-counter-func-redux';
import {ErrorBoundary} from '../error';

import {RoutesWrapper} from '../routes-wrapper/RoutesWrapper';

// import {ClickCounter} from '../click-counter';
// import {ClickCounterFunc} from '../click-counter-func';
// import {InputFunc} from '../input-func';

export const App = () => (
    <div className='wrapper'>
        <Provider store={store}>
            <ErrorBoundary>
                <InputFunc />
                <ClickCounterRedux />
                <BrowserRouter>
                    <Nav />
                    <RoutesWrapper />
                </BrowserRouter>
            </ErrorBoundary>
        </Provider>
    </div>
);