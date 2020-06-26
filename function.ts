// function definition
function add(num1: number, num2: number, num3?: number): number {
    return num1 + num2;
}

console.log(add(5, 10));
console.log(add(5, 10, 10));

// function expression
const sub = function (num1: number, num2: number, num3 = 5): number {
    return num1 - num2;
}

console.log(sub(10, 5));

console.log(sub(10, 5, 50));

// arrow function
const multiply = (num1: number, num2: number): number => {
    return num1 * num2;
}

// const multiply = (num1: number, num2: number) => num1 * num2; 

console.log(multiply(5, 10));

// function alert() : any {

// }