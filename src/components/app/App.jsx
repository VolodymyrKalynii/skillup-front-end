import React from 'react';
import {BrowserRouter} from 'react-router-dom';
// import {Planets} from '../common/planets';

import {Nav} from '../common/nav';
import {InputFunc} from '../common/input-func';
import {ErrorBoundary} from '../error';

import {RoutesWrapper} from '../routes-wrapper/RoutesWrapper';

// import {ClickCounter} from '../click-counter';
// import {ClickCounterFunc} from '../click-counter-func';
// import {InputFunc} from '../input-func';

export const App = () => (
    <div className='wrapper'>
        <ErrorBoundary>
            <InputFunc />
            <BrowserRouter>
                <Nav />
                <RoutesWrapper />
            </BrowserRouter>
        </ErrorBoundary>
    </div>
);

// export const App = () => {
//     const [isShowPlanets, setIsShowPlanets] = useState(false);

//     const bthnHanlder = () => {
//         setIsShowPlanets((prev) => !prev);
//     };

//     return (
//         <div>
//             <button onClick={bthnHanlder} type='button'>Кнопка</button>
//             {isShowPlanets && <Planets />}
//         </div>
//     );
// };