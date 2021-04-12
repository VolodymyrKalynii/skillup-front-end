import React, {useState} from 'react';
import {CommentsApp} from '../comments-app';
// import {ClickCounter} from '../click-counter';
// import {ClickCounterFunc} from '../click-counter-func';
// import {InputFunc} from '../input-func';

export const App = () => {
    const [isShowCounters, setIsShowCounters] = useState(true);

    const btnHandler = () => {
        setIsShowCounters((prev) => !prev);
    };

    const user = {
        name: 'Ivan',
        age: 35
    };

    return (
        <div>
            <button type='button' onClick={btnHandler}>{isShowCounters ? 'Скрыть' : 'Показать'}</button>
            {/* {isShowCounters && <div><hr/><ClickCounterFunc /></div>} */}
            {/* <ClickCounter /> */}
            
            {/* <ClickCounterFunc /> */}
            <hr/>
            {/* <InputFunc /> */}
            <CommentsApp user={user} />
        </div>
    );
};