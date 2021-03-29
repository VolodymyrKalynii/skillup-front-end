import React from 'react';

import {Title} from './title/Title';

export const Comment = ({avatar, author, text}) => {
    const style = {
        background: text.length < 10 ? 'red' : 'blue',
        borderBottom: '1px solid'
    };

    return (
        <li style={style}>
            <Title text={`Аватар: ${avatar}`} />
            <span>Автор: {author}</span>
            <br />
            <span>Коммент: {text}</span>
        </li>
    );
};

