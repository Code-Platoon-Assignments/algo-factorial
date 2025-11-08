const num = 0;

function factorial(num) {
  
  //Iterative way
  // if (num === 0 || num === 1) {
  //   return 1;
  // }else{
  //   return num * factorial(num - 1);
  // } 

  //shorthand way
  return (num === 0 || num === 1) ? 1 : num * factorial(num - 1);

}

module.exports = factorial;


// console.log(factorial(0));
// console.log(factorial(1));
// console.log(factorial(2));
// console.log(factorial(4));
// console.log(factorial(8));
// console.log(factorial(18));
// console.log(num);