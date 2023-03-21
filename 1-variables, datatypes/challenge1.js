// String exercise:
//change the first letter of the given string to capital letter using the inbuilt string methods:


// imperative way:

const myString='developer'
newString1=myString[0].toUpperCase()
console.log(myString)
console.log(newString1)
newString2=myString.slice(1,myString.length)
console.log(newString2)
newString3=newString1+newString2
console.log(newString3)


// Declarative way 

const a='developer'
const b=a[0].toUpperCase()+a.slice(1,a.length)
console.log(b)