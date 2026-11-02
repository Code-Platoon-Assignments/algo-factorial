function factorial(num){
  if (num<0){
    return undefined
  }
  else if (num == 0){
    return 1
  }
  else{
    let product =1;
    for (let i=num; i>0; i--){
      product*=i;
    }
    return product;
  }
}

console.log(`Factorial of -1 is ${factorial(-1)}`);

module.exports = factorial;
