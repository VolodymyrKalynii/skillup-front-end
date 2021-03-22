import './scss/main.scss';

import $ from "jquery";


import User from './User.js';
import {multThree, multTwo} from './functions';

console.log('hello word');

const foo = (name) => {
    console.log(`hello ${name}`);
}

foo('asdad');
foo('Test');


const layout = `<div class='items'>
    <div class='item'>item</div>
    <div class='item'>item</div>
    <div class='item'>item</div>
</div>`

$('#app').html(layout);




const john = new User('John');

john.printName();

console.log(multThree(3));
console.log(multTwo(5));