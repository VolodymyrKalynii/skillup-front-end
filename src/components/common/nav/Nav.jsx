import React from 'react';
import {NavLink} from 'react-router-dom';

export const Nav = () => (
    <div>
        <NavLink exact activeStyle={{color: 'red'}} to='/'> на главную</NavLink>
        <NavLink activeStyle={{color: 'red'}} to='/planets'> planets</NavLink>
        <NavLink activeStyle={{color: 'red'}} to='/comments'> комменты</NavLink>
        <NavLink exact activeStyle={{color: 'red'}} to='/products'> Продукты</NavLink>
        <NavLink activeStyle={{color: 'red'}} to='/products/1'> Телевизор</NavLink>
        <NavLink activeStyle={{color: 'red'}} to='/products/2'> Диван</NavLink>
        {/* <a href='/'> на главную</a> */}
        <hr/>
    </div>
);