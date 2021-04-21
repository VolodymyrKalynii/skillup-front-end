import {ActionTypes} from './action-types';

export const incAction = () => ({type: ActionTypes.INC});
export const decAction = () => ({type: ActionTypes.DEC});
export const rndAction = (payload) => ({type: ActionTypes.RND, payload});
export const setInputNumberAction = (payload) => ({type: ActionTypes.SET_INPUT_NUMBER, payload});