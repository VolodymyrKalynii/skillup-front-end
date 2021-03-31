import React from 'react';
import {Comment} from './comment/Comment';

export const Comments = ({commentsList}) => {
    console.log('items');

    return (
        <ul>{commentsList.map((item) => {
            const {id, ...props} = item;

            return <Comment key={id} {...props} />;
        })}
        </ul>
    );
};
