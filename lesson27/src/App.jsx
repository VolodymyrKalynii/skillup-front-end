import React from 'react';
import ReactDOM from 'react-dom';
import {Title} from './components/common/title';

const title = 'React with Webpack and Badadada';

ReactDOM.render(
    <div><Title title={title} /></div>,
    document.getElementById('app')
);
