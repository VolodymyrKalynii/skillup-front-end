import React from 'react';
import {Comment} from './comment/Comment';

export const Comments = ({commentsList}) => {
    // const items = commentsList.map((item) => {
    //     console.log('item', item);

    //     return <li>{item}</li>;
    // });

    console.log('items');

    return (
        <ul>{commentsList.map((item) => {
            const {id, ...props} = item;

            return <Comment key={id} {...props} />;
        })}
        </ul>
    );
};

// const arr = ['apple', 'orange'];
// const arr2 = [10, 56];

// const upeerFruits = arr.map((item) => {
//     const upperFruitName = item.toLocaleUpperCase();

//     return upperFruitName;
// });

// const newItems = arr2.map((item) => {
//     const transformedItem = `${item.toString()} Привет`;

//     return transformedItem;
// });

// console.log(arr);
// console.log(upeerFruits);
// console.log(arr2);
// console.log(newItems);