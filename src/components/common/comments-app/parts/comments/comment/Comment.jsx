import React, {useContext} from 'react';
import PropTypes from 'prop-types';

import {CommentsAppContext} from '../../../context';

import {Title} from './title/Title';

export const Comment = ({avatar, id, author, text, isLikeed}) => {
    const {delHandler, toggleCommentLikee, inputValue} = useContext(CommentsAppContext);

    const style = {
        background: text.length < 10 ? 'coral' : 'lightblue',
        borderBottom: '1px solid'
    };

    const btnContent = isLikeed ? '+' : '-';

    return (
        <>
            <Title text={`Аватар: ${avatar}`} />
            <p>
                <span>Автор: {author}</span>
            </p>
            <p>inputValue: {inputValue}</p>
            <p style={style}>
                <span>Коммент: {text}</span>
            </p>
            <p><button type='button' onClick={() => toggleCommentLikee(id)}>{btnContent}</button></p>
            <button onClick={() => delHandler(id)} type='button'>del</button>
        </>
    );
};

Comment.propTypes = {
    id: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    isLikeed: PropTypes.bool.isRequired
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