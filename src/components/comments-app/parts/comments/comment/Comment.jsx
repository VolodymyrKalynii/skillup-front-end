import React from 'react';
import PropTypes from 'prop-types';

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

Comment.propTypes = {
    id: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    isLikeed: PropTypes.bool.isRequired,
    toggleCommentLikee: PropTypes.func.isRequired,
    delHandler: PropTypes.func.isRequired
};
