/* eslint-disable no-param-reassign */
import {createSlice} from '@reduxjs/toolkit';

const sliceConfig = {
    name: 'commentsReducer', // имя среза store
    initialState: { // объект начального состояния
        commentsList: null,
        isLoaded: false,
        inputFilterValue: ''
    },
    reducers: {// объект функций reducers
        setComments: (state, action) => {
            state.commentsList = action.payload;
            state.isLoaded = true;
        },
        setInputFilterValue: (state, action) => {
            state.inputFilterValue = action.payload;
        },
        delComment: (state, action) => {
            const {commentsList} = state;

            state.commentsList = commentsList.filter((item) => item.id !== action.payload);
        },
        toggleCommentLike: (state, action) => {
            const {commentsList} = state;

            state.commentsList = commentsList.map((item) => {
                const {id, isLiked} = item;

                return {
                    ...item,
                    isLiked: action.payload === id ? !isLiked : isLiked
                };
            });

            // state.commentsList = commentsList.filter((item) => item.id !== action.payload);
        }
    }
};

export const {reducer, actions} = createSlice(sliceConfig);