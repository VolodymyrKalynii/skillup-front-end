import React from 'react';
import {connect} from 'react-redux';

// import {incDispatcher} from '../../../store/dispatchers';

import styles from './styles.scss';

const ClickCounterReduxBody = ({storeContent, inc}) => {
    // const dispatch = useDispatch();

    const btnHanlder = () => {
        // dispatch({type: 'INCREMENT'});
        inc();
    };

    const btn2Hanlder = () => {
        console.log('btnHanlder');
    };
    
    return (
        <div>
            <p>Количество кликов: {storeContent}</p>
            <p><button className={styles.button} type='button' onClick={btnHanlder}>click</button></p>
            <p><button className={styles.button} type='button' onClick={btn2Hanlder}>getRandNumber</button></p>
        </div>
    );
};

const mapStateToProps = (storeContent) => ({storeContent});
const mapDispatchToProps = (dispatch) => ({
    inc: () => dispatch({type: 'INCREMENT'})
});

export const ClickCounterRedux = connect(mapStateToProps, mapDispatchToProps)(ClickCounterReduxBody);
