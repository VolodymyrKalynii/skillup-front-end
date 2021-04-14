import React, {useEffect, useState} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import {Planets} from '../common/planets';

import {Comments} from './parts';

const Main = () => <div>main</div>;

const products = [
    {
        id: '1',
        name: 'телевизор'
    },
    {
        id: '2',
        name: 'диван'
    }
];

// const product = {
//     id: 1,
//     name: 'телевизор'
// };

const Product = (p) => {
    const {id} = p.match.params;
    const [data, setData] = useState(null);

    useEffect(() => {
        let isMounted = true;

        setTimeout(() => {
            const product = products.find((item) => item.id === id);
            
            console.log(product);

            if (isMounted) setData(product);
        }, 1000);
        
        return () => {
            isMounted = false;
        };
    }, [id]);

    if (data === null) return <div>loader.....</div>;

    if (!data) return <Redirect to='/404'/>;
    
    return (
        <div>
            Product {data.name}
        </div>
    );
};

const Products = () => (
    <div>
        <Switch>
            <Route exact path='/products' component={() => <div>Все продукты</div>} />
            <Route path='/products/:id' component={Product} />
        </Switch>
    </div>
);

export const RoutesWrapper = () => (
    <Switch>
        <Route exact path='/' component={Main} />
        <Route path='/planets' component={Planets} />
        <Route path='/comments' component={Comments} />
        <Route path='/products' component={Products} />
        <Route component={() => <div>404</div>} />
    </Switch>
);