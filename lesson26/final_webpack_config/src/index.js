import './styles.scss'

console.log('hello peoples');

const name = 'Ivan';

const p = document.createElement('p');
p.textContent = `I am ${name}.`;

// создаем элемент заголовка
const heading = document.createElement('h1');
heading.textContent = 'Как интересно!';

// добавляем параграф и заголовок в DOM
const root = document.querySelector('#app');
root.appendChild(heading);
root.appendChild(p);

const printName = () => {
    console.log(name);
};

printName();

// index.js
// создание свойства класса без конструктора
// class Game {
//     name = 'Violin Charades'
// }
// const myGame = new Game();
//
// // создаем параграф
// const p = document.createElement('p');
// p.textContent = `I like ${myGame.name}.`;
//
// // создаем элемент заголовка
// const heading = document.createElement('h1');
// heading.textContent = 'Как интересно!';
//
// // добавляем параграф и заголовок в DOM
// const root = document.querySelector('#app');
// root.append(heading, p);