import React from 'react';
import {Props} from "../../types";

export const Content = ({title, subTitle, fs = 18}:Props) => (
    <div>
        <p style={{fontSize: fs + 'px' }}>{title.toUpperCase()}</p>
        <button onClick={() => console.log(title.toUpperCase())}>Кнопка</button>
        <p>{subTitle}</p>
    </div>
)