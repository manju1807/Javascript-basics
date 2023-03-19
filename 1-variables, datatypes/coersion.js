//coersion in js
//coersion is the process of converting a value from one type to another
//coersion in js is automatic and implicit
// example for coersion

let x = 1 + '2';
console.log(x); //gives 12
console.log(typeof x); //gives string

let y = 1 + 2 + '3';
console.log(y); //gives 33
console.log(typeof y); //gives string

let z = true + 1 + 2;
console.log(z); //gives 4

let a = 1 + 2 + true;
console.log(a); //gives 4

//type of coersion


//1. string coersion
//2. number coersion

//string coersion
let b = 1 + '2';
console.log(b); //gives 12
console.log(typeof b); //gives string

//number coersion
let c = 1 + 2 + '3';
console.log(c); //gives 33
console.log(typeof c); //gives string

let d = 5 + undefined;
console.log(d); //gives NaN
console.log(typeof d); //gives number

let e = 5 + null;
console.log(e); //gives 5
console.log(typeof e); //gives number