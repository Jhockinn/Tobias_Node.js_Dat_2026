// node REPL (Read-evaluate-print loop)
//type coercion
//node <filename>
//Rule: Use strict equality checks: === or !==

console.log("Random Name");

//Rule: Use const whenever possible, otherwise use let

const myFavoriteNumber = 213;

console.log(myFavoriteNumber);

// const means that it is constant in the assignment


//JavaScript object
const person = {
    // key-value pair
    name: "Amin"
};
//Json Object = 

person.age = 123;

//delete person.name;

//const person2;

console.log(person);
 
const things = ["mouse"];

things.push("car");

//things.pop();

//Rule: Use comma in console.log because if we use + (concatenate) we might coerce and change the values

console.log(things[0], things[1]);


//pop = remove last element in array
//push = add an element to an array

//Data types in Javascript
// Strings, Boolean, Number, BigInt, Null, undefined, Object, Symbol

const greetingOne = "Hi, hope ''''''''you had a great summer";
const greetingTwo = '"""""""2';
const greetingThree =`''""" ${person.name}
// booh
`;

console.log(greetingOne);
console.log(greetingTwo);
console.log(greetingThree);