import React from 'react';
// import logo from './logo.svg';
import './App.css';
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


// const Items = () => (
//   <div>
//     <div>item</div>
//     <div>item</div>
//     <div>item</div>
//     <div>item</div>
//   </div>
// );

// function Title() {
//   return <h1>Привет мир!</h1>
// }

// const Title = () => <h1>Привет мир!</h1>


// class FormInput extends React.Component {
//   render(){
//     return <input type='number'/>
//   }
// }


// export const App = () => {
//   return (
//     <div>
//       <Title/>
//       <FormInput/>
//       <Items />
//       <Items />
//       <Items />
//       <Items />
//     </div>
//   );
// }






// const getUser = () => {

//   return ({
//     name:'Vova'
//   });
// };

// console.log(getUser());

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
