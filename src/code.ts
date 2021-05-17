// let userName:string|number = 'Vova';
// //100500 строк
// userName = Math.random() > 0.5 ? 123 : '345';
// //100500 строк
//
// if (typeof userName === 'string') {
//     console.log(userName.toUpperCase())
// }

// const arr:number[] = [1,2,3,4,5,6];
// const arr2:Array<number> = [1,2,3,4,5,6, 'asd'];



//кортежи

// const data: [string, number, boolean?] = ['test', 444, false]
//
// console.log(data[2]);

const data: [string, ...number[], boolean] = ['test', 444, 6, 4, 2, 7, 8, true]
//
// console.log(data[2]);

//enum

// enum WeekDays {
//     Sunday = 'Вс',
//     Monday = 'Пн',
//     Tuesday = 'Вт'
// }
// WeekDays.Monday = 12;
// console.log(WeekDays.Monday);



//functions



// const concatUpperCase = (str1:string, str2?:string) => (str1 + (str2 ? str2 : '')).toUpperCase();
//
// console.log(concatUpperCase('1'));

interface User {
    name:string;
    age?:number;
    status?:string;
}

let user:User = {
    name: 'Vova',
    age: 27,
    status: 'adm'
}

user = {name: 'Ivan'}

type Data = {
    a:string;
    b:number;
    aa:string;
    ba:number;
    ac:string;
    bc:number;
    ad:string;
    bd:number;
    ag:string;
    bg:number;
}

function f(data:Data) {

}


console.log(null === 0);


export {}