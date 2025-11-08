function factorial(num) 
{
  let result = 1;

  // start with the number and multiply down to 1
  for(let i=num; i>1; i--)
  {
    // num = 4(4), 3(12), 2(24), 1(24)
    // 4, 12, 24, 24
    result *= i;
  }
  
  return result;
}

module.exports = factorial;
