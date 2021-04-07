import React from 'react';
import {Comment} from './comment/Comment';

export const Comments = ({commentsList = [], toggleCommentLikee, delHandler}) => {
    console.log('items');

    return (
        <ul>{commentsList.map((item) => 
            <Comment key={item.id} {...item} toggleCommentLikee={toggleCommentLikee} delHandler={delHandler} />)}
        </ul>
    );
};
