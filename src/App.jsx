import React from 'react';
import {HashRouter, Switch, Route} from 'react-router-dom';

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
            <Route exact path={`/`} component={Main} />
            <Route path={`/blog`} component={() => <div>...blog</div>} />
        </Switch>
    </HashRouter>
);