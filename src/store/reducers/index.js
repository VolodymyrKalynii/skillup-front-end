import {reducer as numberReducer} from './number-reducer';
import {reducer as inputReducer} from './input-reducer';
import {reducer as commentsReducer} from './comments-reducer';
// import {numberReducer} from './number-reducer';
// import {inputReducer} from './input-reducer';

// console.log(numberReducer);

export const reducer = {
    numberReducer,
    inputReducer,
    commentsReducer
};
