
function factorial(num) {
  if (num === 0) {
    return 1;
  }
  else if (num === 1) {
    return 1;
  }
  else if (num > 1) {
     total = 1;
     let setNum = num
     for (let i = 0; i < setNum; i++) {
      
      total *= num;
      //console.log('total ' + total)
      num = (num - 1);
      //console.log('num ' + num)
    }
    return total
  }
}
module.exports = factorial;


/** NOTES
 * Edge Cases = 0, negatives
 * turn num into str
 * split string apart
 * multiply strings together
 * repreat until num is single
 */