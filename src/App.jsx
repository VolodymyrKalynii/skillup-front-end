import React from 'react';
import {Title} from './components/title/Title'
import FormInput from './components/form-input/FormInput'

export const App = () => (
  <div>
    <Title title={'главная'}/>
    <Title title={'главная но не совсем'}/>
    <FormInput labelText={'имя'} inputType={'text'} />
    <FormInput labelText={'пароль'} inputType={'password'} />
    <FormInput labelText={'телефон'} inputType={'phone'} />
  </div>
);
