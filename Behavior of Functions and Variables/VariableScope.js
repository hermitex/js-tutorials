// Scope: Where or extend here variables/functions can be "seen"
// es2015
//  Global
//  Functional scope

// var myVarariable = "Global Variables";

// function myFunction(){
//     var anotherVaraible = "Local variable"
//     console.log("From inside the function:", myVarariable);
//     console.log(anotherVaraible);
// }
// console.log("From outside the function:", myVarariable);
// console.log(anotherVaraible);

// myFunction();

// let & const

// function myFunction(){

// const PI = 3.142;

// if(true){
//     const PI = 2;
//     console.log(PI);
// }

// console.log(PI);
// }
// myFunction();

// Hoisting
// console.log(myName);
// var myName = "Anjette"
// function myFunction() {
//     console.log("myFunction");
// }

// myFunction();

// Callback: Callback is function passed to another function to be executed at some point

// function outerFun(text, callback) {
//     // expensive stuff
//   callback(text);
// }

// function innerFun(text) {
//   console.log(text, "innerFun");
// }

// document.querySelectorAll(".classname")
// document.getElementsByClassName(".classname")
// document.getElementsByTagName("div") //HTMLAllCollection [u, u,u]
// document.getElementById("classname")

// for (let index = 0; index < array.length; index++) {
//     buttons[index].addEventListener("mousemove", n);

// }

// function n(e) {
//     console.log('Mouse moved');
// }

// Closure: enclosing

// Environment made up of eclosed reference and its surroundings state (lexical environment)
// With the closure:  You will able to access function scope

function outerFunction() {
  let myVar = "Anjette";
  function greeting() {
     console.log("Hello, " + myVar);
  }
 return greeting;
}

let greeting = outerFunction();

console.log(greeting());
