console.log('hello word');

const foo = (name) => {
    console.log(`hello ${name}`);
}


foo('asdad');
foo('Test');


document.querySelector('#app').innerHTML = 'Привет большой мир';


class User {
    constructor(name) {
        this.__name = name;

    }
    printName() {
        console.log(this.__name);
    }
}

const john = new User('John');

john.printName();


// .innerHTML('asdasdada')