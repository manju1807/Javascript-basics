//ways to declare a variable 
//var, let, const

//var is the old way of declaring a variable

let firstName='John';
let lastName='Doe';

console.log(firstName, lastName);

let age=30;

// Naming conventions
// 1. Cannot start with a number
// 2. Can start with letters, numbers, _, $
// 3. Are case sensitive

let $name='John';
let _name='John';
let name1='John';

// let 1name='John'; //error

//multi-word Formatting
//firstName=camelCase
//first_name=underscore
//FirstName=pascalCase
//firstname=lowercase

// Re-assigning variables
age=31;
console.log(age);

let score;
score=1;
console.log(score);

if (true){
    score=score+1;
}
console.log(score);