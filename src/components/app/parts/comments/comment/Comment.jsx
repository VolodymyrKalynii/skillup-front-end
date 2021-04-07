import React from 'react';

import {Title} from './title/Title';

export const Comment = ({avatar, id, author, text, isLikeed, toggleCommentLikee, delHandler}) => {
    const style = {
        background: text.length < 10 ? 'coral' : 'lightblue',
        borderBottom: '1px solid'
    };

    const btnContent = isLikeed ? '+' : '-';

    return (
        <li style={style}>
            <Title text={`Аватар: ${avatar}`} />
            <span>Автор: {author}</span>
            <br />
            <span>Коммент: {text}</span>
            <p><button type='button' onClick={() => toggleCommentLikee(id)}>{btnContent}</button></p>
            <button onClick={() => delHandler(id)} type='button'>del</button>
        </li>
    );
};

