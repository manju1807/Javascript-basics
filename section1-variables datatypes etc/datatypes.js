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

//The datatypes are stored in different areas all primitive datatypes are stored stack whereas all the reference datatypes are stored in heap memory.
// reference diagram is shared in the diagrams folder of this module.