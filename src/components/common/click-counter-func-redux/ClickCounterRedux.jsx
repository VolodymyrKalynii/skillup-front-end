import React from 'react';

import styles from './styles.scss';

export const ClickCounterRedux = () => {

    const incHandler = () => {
        console.log('increment');
    };

    const decHandler = () => {
        console.log('decrement');
    };

    const rndHanlder = () => {
        console.log('decrement');
    };

    const inputHanlder = () => {
        console.log('inputHanlder');
    };
    
    return (
        <div>
            {/* <p>Количество кликов: {storeContent}</p> */}
            <button className={styles.button} type='button' onClick={incHandler}>increment</button>
            <button className={styles.button} type='button' onClick={decHandler}>decrement</button>
            <button className={styles.button} type='button' onClick={rndHanlder}>rnd</button>
            <input type='text' onChange={inputHanlder}/>
        </div>
    );
};
