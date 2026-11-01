function factorial(num){
  let product =1;
  for (let i=num; i>0; i--){
    product*=i;
  }
  return product;
}

console.log(`Factorial of 5 is ${factorial(5)}`);

module.exports = factorial;