import React, {useState} from 'react';
import {connect} from 'react-redux';

import styles from './styles.scss';

export const InputFuncBody = ({storeContent}) => {
    const [user, setUser] = useState({name: 'Vova', age: 27});

    const onInputChange = (e) => {
        const {value} = e.target;

        setUser((prev) => ({...prev, name: value}));
    };

    const {name, age} = user;

    return (
        <div>
            <p><input className={styles.input} value={name} onChange={onInputChange} type='text'/></p>
            <p>name: {name} {storeContent}</p>
            <p>age: {age}</p>
        </div>
    );
};

const mapStateToProps = (storeContent) => ({storeContent});

export const InputFunc = connect(mapStateToProps)(InputFuncBody);

// export const InputFunc = () => {
//     const [inputValue, setInputValue] = useState('');

//     const onInputChange = (e) => {
//         const {value} = e.target;
//         setInputValue(value);
//     };

//     return (
//         <div>
//             <p><input className={styles.input} value={inputValue} onChange={onInputChange} type='text'/></p>
//             <p>Значение: {inputValue}</p>
//         </div>
//     );
// };