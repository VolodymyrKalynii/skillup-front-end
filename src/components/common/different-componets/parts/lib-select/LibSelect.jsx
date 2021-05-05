import React, {useState} from 'react';
import Select from 'react-select';

const options = [
    {value: 'ease', label: 'ease'},
    {value: 'medium', label: 'medium'},
    {value: 'hard', label: 'hard'}
];

export const LibSelect = () => {
    const [gameSettings, setGameSettings] = useState({});

    const selectHandler = (e) => {
        console.log(e);

        const {value} = e;

        setGameSettings((prev) => ({...prev, complex: value}));
    };

    return (
        <div>
            <p>{JSON.stringify(gameSettings)}</p>
            <Select options={options} onChange={selectHandler} />
        </div>
    );
};