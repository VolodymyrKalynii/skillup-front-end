let userName = 'Vova';
//100500 строк
userName = Math.random() > 0.5 ? 123 : '345';
//100500 строк

if (typeof userName === 'string') {
    console.log(userName.toUpperCase())
}

const arr = [1,2,3,4,5,6];
const arr2= [1,2,3,4,5,6, 'asd'];


const concatUpperCase = (str1, str2) => (str1 + str2).toUpperCase();

concatUpperCase('1')


let user = {
    name: 'Vova',
    age: 27
}
user = {name: 'Ivan'}

console.log(null === 0);