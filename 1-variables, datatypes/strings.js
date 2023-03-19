let x;

const name='john'
const age=30;

x='Hello, my name is '+name+'and I am'+age+'year old';

//using Template literals:
x=`Hello, my name is ${name} and I am ${age} year old`;

console.log(x); 

// String Properties and Methods

const s='Hello World';
console.log(s.length); //gives 11
console.log(s.toUpperCase()); //gives HELLO WORLD
console.log(s.toLowerCase()); //gives hello world

//concatenation

const s1='Hello';
const s2='World';
console.log(s1+s2); //gives HelloWorld

//concatenation using template literals

const s3=`${s1} ${s2}`;
console.log(s3); //gives Hello World

//splitting a string

const s4='technology, computers, it, code';
console.log(s4.split(', ')); //gives [ 'technology', 'computers', 'it', 'code' ]

