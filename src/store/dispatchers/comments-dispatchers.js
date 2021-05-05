import {actions} from '../reducers/comments-reducer';
import {store} from '../store';

const {dispatch} = store;
const {setComments, setInputFilterValue, delComment, toggleCommentLike} = actions;

export const setCommentsDispatcher = (commentsList) => dispatch(setComments(commentsList));
export const setInputFilterValueDispatcher = (inputFilterValue) => dispatch(setInputFilterValue(inputFilterValue));
export const delCommentDispatcher = (commentId) => dispatch(delComment(commentId));
export const toggleCommentLikeDispatcher = (commentId) => dispatch(toggleCommentLike(commentId));