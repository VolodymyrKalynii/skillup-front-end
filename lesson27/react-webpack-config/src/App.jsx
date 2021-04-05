import React from 'react';
import ReactDOM from 'react-dom';
import {Title, Comments} from './components';

const App = () => {
    const commentsList = [
        {
            id: 2,
            avatar: '..../',
            text: 'cooment1',
            author: 'Ivan'
        },
        {
            id: 22,
            avatar: '..../',
            text: 'cooment1213',
            author: 'Ivan 123'
        },
        {
            id: 52,
            avatar: '..../',
            text: 'cooment1444444',
            author: 'Vova'
        }
    ];

    return (
        <div>
            <Title />
            <Comments commentsList={commentsList} />
        </div>
    );
};

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
