//operators in Javascript

//Arithmetic Operators
// + - * / % ++ --

let x;
x = 10+10;
x = 10-10;
x = 10*10;
x = 10/10;
x = 10%10;
x = 10++;
x = 10--;

//Assignment Operators
// = += -= *= /= %=

let y;
y = 10;
y += 10;
y -= 10;
y *= 10;
y /= 10;
y %= 10;


//Comparison Operators
// == === != !== > < >= <=

let a = 10;
let b = 20;
let c = 10;

console.log(a == b);
console.log(a === c);
console.log(a != b);
console.log(a !== c);
console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);


//Logical Operators
// && || !

let d = 10;
let e = 20;
console.log(d < 15 && e > 15);
console.log(d < 15 || e > 15);
console.log(!(d < 15 && e > 15));

//Bitwise Operators
// & | ^ ~ << >>
 let f=1
 let g=1
console.log(f&g)
console.log(f|g)
console.log(f^g)
console.log(~f)
console.log(f<<g)
console.log(f>>g)

//String Operators
// + (concatenation)

let h = "Hello";
let i = "World";
console.log(h + i);


//typeof Operator
// typeof

let j = "Hello";
console.log(typeof j);


//Ternary Operator
// ?:


let k = 10;
let l = 20;
let m = k > l ? "k is greater than l" : "l is greater than k";

