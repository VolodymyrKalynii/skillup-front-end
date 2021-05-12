import React from 'react';
import {BrowserRouter, Router, HashRouter, Switch, Route} from 'react-router-dom';

import {pathConfig} from './config/path-config';

import {Title} from './components/title/Title'
import FormInput from './components/form-input/FormInput'

const Main = () => (
  <div>
    <Title title={'главная'}/>
    <Title title={'главная но не совсем'}/>
    <FormInput labelText={'имя'} inputType={'text'} />
    <FormInput labelText={'пароль'} inputType={'password'} />
    <FormInput labelText={'телефон'} inputType={'phone'} />
  </div>
);

export const App = () => (
    <HashRouter>
        <Switch>
            <Route exact path={`${pathConfig.root}/`} component={Main} />
            <Route path={`${pathConfig.root}/blog`} component={() => <div>...blog</div>} />
        </Switch>
    </HashRouter>
);