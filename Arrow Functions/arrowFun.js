// function sayGreeting(name) {
//    return `Good morning, ${name}!`;
// }

// let sayGreeting = (name) => {
//     return `Good morning, ${name}!`;
// }

// let sayGreeting = (name) =>  {
//     return `Good morning, ${name}!`;
// };

// console.log(sayGreeting("Jane"))

// let sayGreeting = name =>  `Good morning, ${name}!`;

// Hoisting
// console.log(sayGreeting("Anjette"));

// function sayGreeting(name) {
//    return `Good morning, ${name}!`;
// }

// let sayGreeting = name =>  `Good morning, ${name}!`;

// console.log(sayGreeting("Anjette"));

// function name() {
//     console.log(arguments);
// }
// name(1,4,5,5,6,6,7,7);
// let age = 19;
// let checkAge =
//   age < 18
// ? () => console.log("Go home!")
// : () => console.log("Enjoy the party!");

// checkAge();

// function Animal(name, color) {
//     this.name = name;
//     this.color = color;
//     this.introuduce = function () {
//         console.log(this);

//     }
// }

// console.log(new Animal("Jane","Green").introuduce());

// Array and Objec Destructuring

// const names = ["Jane", "Doe"];

// function createUser() {
//   const [firstName, lastName] = ["Jane", "Doe"];
//   let user = {
//     firstName: firstName,
//     lastName: lastName,
//   };
//   return user;
// }

// console.log(createUser(names));

// Template Literals

// function greeting(name) {
//      console.log("Good evening " + name + "\nI hope you have completed the \"tasks\".");
//     console.log(`Good evening ${56*6}. I hope you have completed the "tasks".`);
// }
// greeting("Lucy")

// function taxCal() {
//   let args = arguments;
//   console.log(arguments)
//   salary = args[0];
//   let netSal = salary - salary * 0.05;
//   return netSal;
//   //arguments => it is an array-like object that contains all the arguments passed to the function as well as other metadata
// }

// let taxCal = (...args) => {
//   console.log(args);
//   salary = args[0];
//   let netSal = salary - salary * 0.05;
//   return netSal;
// };

// let taxCal = () => {
//   console.log(this);
// };

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//     this.introduce = function () {
//         console.log(this);
//         // return `I am ${this.name} and i am ${this.age} years old.`;
//         this.sayAge = () => {
//             console.log(this);
//            }
//            sayAge();
//     }

// }

// let person = new Person("John", 35);

// console.log(person.introduce());

// let age = 80;
// const checkAge =
//   age < 18
//     ? () => console.log("Welcome kid!")
//     : () => console.log("Welcome Senior!");
// checkAge()

// fetch(url)
// .then(response=>response.json())

// Array.map(el=>function name(params) {

// })

let user1 = "Anjette";
let user2 = "Anjette1";
let user3 = "Anjette2";

const users = ["Anjette", "Anjette1", "Anjette2"];

const [, CTO] = ["Anjette", "Anjette1", "Anjette2"];

const products =   {
    brand: "Techno Camon Pro",
    price: "Sh. 250000",
  }


const {brand, price} = products;


function createUsers({brand,price} ) {
  console.log(brand, price);
}

createUsers(products);
