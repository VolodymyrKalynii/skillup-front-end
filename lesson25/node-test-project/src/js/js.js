// import 'jquery';

const text = 'Привет мир';

console.log(text);

const user = {
	name: 'Ivan'
};


const arr = [1,2,3,4,5];


const newArr = arr.map(item => item)
	.map(item => item)
	.map(item => item)
	.map(item => item)
	.map(item => item)
	.map(item => item)
	.map(item => item)
	.map(item => item);


const doValue = (val) => val * 2;

console.log(doValue(5));
// $('#app').append(doValue);