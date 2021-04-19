import React from 'react';

import {useWithData} from '../../../../lib/useWithData';

const PlanetsInner = ({data}) => (
    <div>
        {data.map((item, id) => <p key={id}>{item.name}</p>)}
    </div>
);

export const Planets = () => useWithData(PlanetsInner, 'https://swapi.dev/api/planets/');

// export const Planets = () => {
//     const [data, setData] = useState(null);

//     useEffect(() => {
//         let isMounted = true;

//         fetch('https://swapi.dev/api/planets/')
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