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

//charAr method

const s5='Hello World';
console.log(s5.charAt(0)); //gives H

//substring method

const s6='Hello World';
console.log(s6.substring(0,5)); //gives Hello

//slice method

const s7='Hello World';
console.log(s7.slice(0,5)); //gives Hello

//indexof method

const s8='Hello World';
console.log(s8.indexOf('o')); //gives 4

//lastindexof method

const s9='Hello World';
console.log(s9.lastIndexOf('o')); //gives 7

//replace method

const s10='Hello World';
console.log(s10.replace('World','Everyone')); //gives Hello Everyone

//includes method

const s11='Hello World';
console.log(s11.includes('Hello')); //gives true

//repeat method

const s12='Hello World';
console.log(s12.repeat(3)); //gives Hello WorldHello WorldHello World

//trim method

const s13=' Hello World ';
console.log(s13.trim()); //gives Hello World

//charAt method

const s14='Hello World';
console.log(s14.charAt(0)); //gives H

//charCodeAt method

const s15='Hello World';
console.log(s15.charCodeAt(0)); //gives 72
