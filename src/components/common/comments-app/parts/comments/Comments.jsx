import React from 'react';
import PropTypes from 'prop-types';

import {Comment} from './comment/Comment';

export const Comments = ({commentsList = [], toggleCommentLikee, delHandler}) => {
    console.log('items');

    return (
        <ul>{commentsList.map((item) => 
            <Comment key={item.id} {...item} toggleCommentLikee={toggleCommentLikee} delHandler={delHandler} />)}
        </ul>
    );
};

Comments.propTypes = {
    commentsList: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            avatar: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
            author: PropTypes.string.isRequired,
            isLikeed: PropTypes.bool.isRequired
        })
    ).isRequired,
    toggleCommentLikee: PropTypes.func.isRequired,
    delHandler: PropTypes.func.isRequired
};
