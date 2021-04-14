import React, {useEffect, useState} from 'react';

import {Loader} from '../loader';

export const Planets = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        let isMounted = true;

        fetch('https://swapi.dev/api/planets/')
            .then((res) => res.json())
            .then(({results}) => {
                
                if (isMounted) setData(results);
            })
            .catch((e) => console.log(e));
        
        return () => {
            isMounted = false;
        };
    }, []);

    if (!data) return <Loader />;

    return (
        <div>
            {data.map((item, id) => <p key={id}>{item.name}</p>)}
        </div>
    );
};