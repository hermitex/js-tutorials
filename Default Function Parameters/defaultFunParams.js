function sayGreeting(name = "Unknown") {
    let greeting = `Hello! My name is ${name}`;
    console.log(greeting);
}

sayGreeting("Anjette");

function addNumber(a=1, b=2){
    return a+b;
}

let res = addNumber(6);

console.log(res);