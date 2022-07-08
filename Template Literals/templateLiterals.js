
const name = "Anjette";
function sayName(name) {
    let age = 22;
    // let str = "I am " + name +  ".\n \"I am \" " + age + " years old."
    let str = `I am ${name}.
"I am" ${age+4} years old.
I like hiking and sleeping.
`
console.log(str);
}
console.log(sayName(name));