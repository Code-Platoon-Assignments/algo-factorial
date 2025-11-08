function factorial(num) {
  //factorial in math is !, not to be confused with the 'not' operator logic
  //here I want to take a num value = x , decrement it, multiply it by that number
  //and do so until it reaches zero: requires a for loop

  // 5, 5x4x3x2x1,
  let totalValue = 1;
  
  //this segment allows you to mult 1 x 2 x 3 x 4 x N
  //
  for (let i = 1; i <= num; i++) {
    totalValue *= i;
  }
  return totalValue;
}

let num = 10;
console.log(factorial(num));
module.exports = factorial;
