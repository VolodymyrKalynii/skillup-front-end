import User from './User.js';
import {multThree, multTwo} from './functions';

console.log('hello word');

const foo = (name) => {
    console.log(`hello ${name}`);
}

foo('asdad');
foo('Test');

document.querySelector('#app').innerHTML = 'Привет большой мир';


const john = new User('John');

john.printName();

console.log(multThree(3));
console.log(multTwo(5));