//type conversion
let val;

//number to string
val = String(555);
val = String(4 + 4);
console.log(val);
console.log(typeof val);
console.log(val.length);

//boolean to string
val = String(true);
console.log(val);
console.log(typeof val);
console.log(val.length);

//date to string
val = String(new Date());
console.log(val);
console.log(typeof val);
console.log(val.length);

//array to string

val = String([1, 2, 3, 4]);
console.log(val);
console.log(typeof val);
console.log(val.length);

//toString()

val = (5).toString();
val = true.toString();
console.log(val);
console.log(typeof val);
console.log(val.length);

//string to number

val = Number("5");
val = Number(true);
val = Number(false);
val = Number(null);
val = Number("hello");
val = Number([1, 2, 3]);

val = parseInt("100.30");
val = parseFloat("100.30");

console.log(val);