function factorial(num) {
  //classic JS for loop
  /*start i at 1
  so long as i <= num
  i++ each iteration
  */
 let prevProduct = 1;
 for (i=1; i<=num; i++){
  prevProduct*=i;
 }
 //save product each time and multiply next i by that value
  return prevProduct;
}

module.exports = factorial;
