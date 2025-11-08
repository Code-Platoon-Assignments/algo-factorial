function factorial(num) {
    let fact = 1;
    for (let f = 1; f <= num; f++) {    // for loop; f is an iterator; continues as long as f <= num; f++ counts for each iteration
        fact *= f;
    }
    return fact; 
}

// console.log(factorial(10));  // for testing

module.exports = factorial;

