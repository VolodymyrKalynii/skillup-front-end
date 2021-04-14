import React from 'react';
import {Switch, Route, NavLink} from 'react-router-dom';

import {CommentsApp} from '../../../common/comments-app';

export const Comments = () => ( 
    <div>
        <NavLink to='/comments/add'> Добавить</NavLink>
        <NavLink to='/comments/new'> Новые</NavLink>
        <Switch>
            <Route exact path='/comments' component={CommentsApp} />
            <Route path='/comments/add' component={() => <div>add</div>} />
            <Route path='/comments/new' component={() => <div>new</div>} />
        </Switch>
    </div>
);