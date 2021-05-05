import React, {useState} from 'react';
import Switch from 'react-switch';

export const LibSwitch = () => {
    const [checked, setChecked] = useState(false);

    const handleChange = (value) => {
        console.log(value);
        setChecked(value);
    };

    return (
        <div>
            <Switch onChange={handleChange} checked={checked} />
        </div>
    );
};