// JAVASCRIPT IS A dynamically typed . this means, we do not explicitly define the types for our variables.
// javascript is a loosely typed language. this means, we do not have to specify the type of data a variable will hold.
// Many other Statically-typed languages are C,C++ and java

//primitive datatypes

//string
var name = "John";
console.log(name);
console.log(typeof name); //string

//number
var age = 30;
console.log(age);
console.log(typeof age); //number

//boolean
var hasKids = true;
console.log(hasKids);
console.log(typeof hasKids); //boolean

//null
var car = null;
console.log(car);
console.log(typeof car); //object

//undefined
var house;
console.log(house);
console.log(typeof house); //undefined

//symbol
var sym = Symbol();
console.log(sym);
console.log(typeof sym); //symbol

//bigint
var big = 1234567890123456789012345678901234567890n;
console.log(big);

///////reference datatypes

//array
var hobbies = ["movies", "music"];
console.log(hobbies);
console.log(typeof hobbies); //object

//object literal
var address = {
    city: "Bangalore",
    state: "Karnataka"
};
console.log(address);
console.log(typeof address); //object

//date
var today = new Date();
console.log(today);
console.log(typeof today); //object

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