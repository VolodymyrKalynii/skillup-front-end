import React from 'react';
import PropTypes from 'prop-types';

import {delCommentDispatcher, toggleCommentLikeDispatcher} from '../../../../../../store/dispatchers/comments-dispatchers';

import {Title} from './title/Title';

export const Comment = ({avatar, author, id, isLiked, text}) => {
    const style = {
        background: text.length < 10 ? 'coral' : 'lightblue',
        borderBottom: '1px solid'
    };

    const btnContent = isLiked ? '+' : '-';

    return (
        <>
            <Title text={`Аватар: ${avatar}`} />
            <p>
                <span>Автор: {author}</span>
            </p>
            <p style={style}>
                <span>Коммент: {text}</span>
            </p>
             <p><button type='button' onClick={() => toggleCommentLikeDispatcher(id)}>{btnContent}</button></p>
             <button onClick={() => delCommentDispatcher(id)} type='button'>del</button>
        </>
    );
};

Comment.propTypes = {
    avatar: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    isLiked: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired
};

/*

<CommentsAppContext.Consumer>
{
    ({delHandler, toggleCommentLikee, inputValue}) => (
        <>
        <Title text={`Аватар: ${avatar}`} />
            <p>
                <span>Автор: {author}</span>
            </p>
            <p>inputValue: {inputValue}</p>
            <p>
                <span>Коммент: {text}</span>
            </p>
            <p><button type='button' onClick={() => toggleCommentLikee(id)}>{btnContent}</button></p>
            <button onClick={() => delHandler(id)} type='button'>del</button>
        </>
    )
}
</CommentsAppContext.Consumer> 
*/