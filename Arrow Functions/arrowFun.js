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

const names = ["Jane", "Doe"];

function createUser() {
  const [firstName, lastName] = ["Jane", "Doe"];
  let user = {
    firstName: firstName,
    lastName: lastName,
  };
  return user;
}

console.log(createUser(names));
