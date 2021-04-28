import React from 'react';
import PropTypes from 'prop-types';
import {useDispatch, connect, useSelector} from 'react-redux';

import styles from './styles.scss';
import {
    // decDispatcher,
    // incDispatcher,
    // rndDispatcher,
    setInputNumberDispatcher
} from '../../../store/dispatchers/number-dispatchers';

import {actions} from '../../../store/reducers/number-reducer';

export const ClickCounterReduxBody = ({str, inc}) => {
    const dispatch = useDispatch();
    const {number} = useSelector((store) => store.numberReducer);
    const inputValue = useSelector((store) => store.inputReducer.inputValue);

    const incHandler = () => {
        console.log('increment');
        // incDispatcher();
        inc();
    };

    const decHandler = () => {
        console.log('decrement');
        // decDispatcher();

        dispatch(actions.decrement());
    };

    const rndHandler = () => {
        console.log('decrement');
        const rnd = Math.floor(Math.random() * 10);

        // rndDispatcher(rnd);
        dispatch(actions.addRnd(rnd));
    };

    const inputHandler = (e) => {
        console.log('inputHandler');
        const {value} = e.target;

        setInputNumberDispatcher(+value);
    };

    return (
        <div>
            <p>Количество кликов {str}: {number}</p>
            <p>{inputValue}</p>
            <button className={styles.button} type='button' onClick={incHandler}>increment</button>
            <button className={styles.button} type='button' onClick={decHandler}>decrement</button>
            <button className={styles.button} type='button' onClick={rndHandler}>rnd</button>
            <input type='text' onChange={inputHandler}/>
        </div>
    );
};

ClickCounterReduxBody.propTypes = {
    str: PropTypes.string.isRequired
};

const mapStateToProps = (store) => ({
    number: store.numberReducer.number,
    inputValue: store.inputReducer.inputValue
});

const mapDispatchToProps = (dispatch) => ({
    inc: () => dispatch(actions.increment())
});

export const ClickCounterRedux = connect(mapStateToProps, mapDispatchToProps)(ClickCounterReduxBody);