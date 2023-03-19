//prototype in Js
//prototype is a property of a function
//prototype is an object
//prototype is used to add properties and methods to an object

//prototype can be accesed by following
//functionName.prototype

//example
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greeting = function () {
    return `My name is ${this.name} and I am ${this.age} year old`;
}

const person1 = new Person('John', 30);
console.log(person1)

//using __proto__
//__proto__ is a property of an object
//__proto__ is an object
//__proto__ is used to access properties and methods of an object

//example
let s='hello world'
console.log(s.__proto__) // you can see the options containg all the methods in the browser
