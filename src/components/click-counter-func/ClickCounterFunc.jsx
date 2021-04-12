/* eslint-disable arrow-body-style */
import React, {useState, useEffect, useMemo, useLayoutEffect} from 'react';

import {calculateFib} from '../../lib/fib-calculator';
import {sleepApp} from '../../lib/sleep-app';
// import {timeFunctionTest} from '../../lib/perf-test';

import styles from './styles.scss';

export const ClickCounterFunc = ({initClicksQty = 0}) => {
    const [clickCounter, setClickCounter] = useState(initClicksQty);
    const [rndNumber, setRndNumber] = useState();

    useLayoutEffect(() => {
        console.log('запос mount useLayoutEffect');

        sleepApp(4000);
        console.log('done');
    }, []);

    // useEffect(() => {
    //     console.log('запос mount');

    //     sleepApp(4000);
    //     console.log('done');
    // }, []);

    useEffect(() => {
        console.log('запос all time');
    });

    useEffect(() => {
        console.log('запос только когда изменяется clickCounter');
    }, [clickCounter]);

    useEffect(() => {
        console.log('запос только когда изменяется rndNumber');
    }, [rndNumber]);

    const btnHanlder = () => {
        setClickCounter((prevState) => prevState + 1);
    };

    const btn2Hanlder = () => {
        setRndNumber(Math.random());
    };
    
    const result = useMemo(() => calculateFib(clickCounter), [clickCounter]);

    // timeFunctionTest(10, () => calculateFib(45));

    // const result = calculateFib(clickCounter);

    return (
        <div>
            <p>Количество кликов: {clickCounter}</p>
            <p><button className={styles.button} type='button' onClick={btnHanlder}>click</button></p>
            <p>Случайное число: {rndNumber}</p>
            <p><button className={styles.button} type='button' onClick={btn2Hanlder}>getRandNumber</button></p>
            <p>Число Фиббоначи для {clickCounter} : {result}</p>
        </div>
    );
};