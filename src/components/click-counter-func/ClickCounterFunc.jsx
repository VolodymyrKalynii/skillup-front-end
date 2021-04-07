/* eslint-disable arrow-body-style */
import React, {useState, useEffect} from 'react';

import styles from './styles.scss';

export const ClickCounterFunc = ({initClicksQty = 0}) => {
    const [clickCounter, setClickCounter] = useState(initClicksQty);
    const [rndNumber, setRndNumber] = useState();

    // useEffect(() => {
    //     const timeout = setTimeout(() => {
    //         setRndNumber(Math.random());
    //     }, 1000);

    //     return () => {
    //         console.log('unmount');
    //         clearTimeout(timeout);
    //     };
    // }, [rndNumber]);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setClickCounter((prev) => prev + 1);
        }, 1000);

        return () => {
            console.log('unmount');
            clearTimeout(timeout);
        };
    }, [clickCounter]);

    const btnHanlder = () => {
        setClickCounter((prevState) => prevState + 1);
    };

    const btn2Hanlder = () => {
        setRndNumber(Math.random());
    };

    console.log('render fc');

    return (
        <div>
            <p>Количество кликов: {clickCounter}</p>
            <p><button className={styles.button} type='button' onClick={btnHanlder}>click</button></p>
            <p>Случайное число: {rndNumber}</p>
            <p><button className={styles.button} type='button' onClick={btn2Hanlder}>getRandNumber</button></p>
        </div>
    );
};