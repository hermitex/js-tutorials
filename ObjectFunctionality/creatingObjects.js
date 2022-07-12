// Objects
// const car = {
//     color: "red",
//     price: "Sh. 250000",
//     model: "Probox",
//     speed: function speed() {
//         console.log("Speeding")
//     }
// };

// factory function
// function carObjectFactory(color, price, model) {
//   return {
//     color,
//     price,
//     model,
//     speed() {
//       console.log("Speeding");
//     },
//   };
// }

// const car1 = carObjectFactory("red", "Sh.250000", "Probox");
// console.log(car1.color);
// const car2 = carObjectFactory("green", "Sh.350000", "Toyota");
// console.log(car2.speed());

// PascalCase
// camelCase

// // construction/classes
// function Car(color, price, model) {
//   this.color = color;
//   this.price = price;
//   this.model = model;
//   this.speed = function () {
//     console.log("Speeding");
//   };
// }

// const car1 = new Car("red", "Sh.250000", "Probox");
// console.log(car1);
// const car2 = new Car("green", "Sh.350000", "Toyota");
// console.log(car2);

// const car = {
//   color: "red",
//   price: "Sh. 250000",
//   model: "Probox",
//   speed: function speed() {
//     console.log("Speeding");
//   },
// };

// Object.prototype.keys()
// const keys = Object.keys(car);

// Object.prototype.values()
// const values = Object.values(car);
// console.log(values);

// Object.prototype.assign()
// const supercar = Object.assign({
//     price: "150k",
//     maxspeed: "200km/hr",
//   }, car);

// Object.prototype.defineProperties()
// Object.defineProperties(car, {
//     color: {
//         value: "red",
//         writable: true,
//     },
//     price: {
//         value: "Sh. 250000",
//         writable: false,
//     },
//     model: {
//         value: "ProBox",
//         writable: true,
//     }
// })
// car.color = "White";
// car.price = "150k";

// let car = {

//     color: "red",
//     price: "Sh. 250000",
//     model: "Probox",
//     speed: function speed() {
//       console.log("Speeding");
//     },
// };

//   const carsAsArray = Object.entries(cars);

//   Object.prototype.fromEntries();
// const carsObj = Object.fromEntries(carsAsArray);

// Object.prototype.freeze();
// const frozenCarObj = Object.freeze(car);
// console.log(frozenCarObj)
// delete car.color;
// console.log(frozenCarObj)

// Object.prototype.defineProperty()
// car.price = "500k";
// console.log(car)
// car = Object.defineProperty(car, 'price', {

//     value: "120k",
//     writable: false
// })
// car.price = "1500k";

// console.log(car)

// function speed() {
//     console.log(this.color)
// }

// let car = {
//   color: "red",
//   price: "Sh. 250000",
//   model: "Probox",
// };

// function checkThis() {
//   console.log(this);
// }

// Constructor function
// function CheckThis(name, age) {
//   this.name = name;
//   this.age = age;
//   this.introduce = function () {
//     console.log(this);
//   };
// }

// const fun = new Function()
// console.log(fun)

// let person = new CheckThis("Anjette", 22);
// person.introduce();
function color() {
  console.log(this.color);
}

let car1 = {
  color: "red",
  price: "Sh. 250000",
  model: "Probox",
};

function car(color, price, model) {
  return {
    color,
    price,
    model,
  };
}
let car2 = car("", "", "")

let fun = color.bind(car1, ["White", "120K", "Toyota"]);

console.log(fun())




