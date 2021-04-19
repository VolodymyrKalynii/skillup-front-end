import React from 'react';

import {useWithData} from '../../../../lib/useWithData';
// export const Persons = () => {
//     const [data, setData] = useState(null);

//     useEffect(() => {
//         let isMounted = true;

//         fetch('https://swapi.dev/api/people/')
//             .then((res) => res.json())
//             .then(({results}) => {
                
//                 if (isMounted) setData(results);
//             })
//             .catch((e) => console.log(e));
        
//         return () => {
//             isMounted = false;
//         };
//     }, []);

//     if (!data) return <Loader />;

//     return (
//         <div>
//             {data.map((item, id) => <p key={id}>{item.name}</p>)}
//         </div>
//     );
// };

const PersonsInner = ({data, text}) => (
    <div>
        <p>{text}</p>
        {data.map((item, id) => <p key={id}>{item.name}</p>)}
    </div>
);

export const Persons = () => {
    console.log(1);

    const text = 'кокой-то текс';

    return useWithData(PersonsInner, 'https://swapi.dev/api/people/', {text});
};