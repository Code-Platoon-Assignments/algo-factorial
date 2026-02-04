function factorial(num) {
  //have to think about 0
  if (num === 0) return 1; 

  // then need a starting point, 1 just makes sense because 0 would be bad
  let result = 1;

  // then need a loop, start at 'num' and as long as i is a positive number, multiply it by i
  ///then subtract 1 from i
  for (let i = num; i > 1; i--) {
    result = result * i;}

    // give answer 
  return result;
}


module.exports = factorial;
