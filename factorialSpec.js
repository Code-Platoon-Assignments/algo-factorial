const factorial_function = require("./factorial");

console.log(factorial_function.factorial(0) === 1);
console.log(factorial_function.factorial(1) === 1);
console.log(factorial_function.factorial(2) === 2);
console.log(factorial_function.factorial(4) === 24);
console.log(factorial_function.factorial(8) === 40320);
console.log(factorial_function.factorial(18) === 6402373705728000);
// Test how high of a number your program can calculate. Can you push it further?
console.log();
console.log("Factorial using Recursion");
console.log(factorial_function.factorial_recursive(0)=== 1);
console.log(factorial_function.factorial_recursive(2) === 2);
console.log(factorial_function.factorial_recursive(4) === 24);
console.log(factorial_function.factorial_recursive(8) === 40320);
console.log(factorial_function.factorial_recursive(18) === 6402373705728000);