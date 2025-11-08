function factorial(num) {
    if(num < 0){
        return "This function only accepts non-negative numbers."
    }else if(num===0 || num === 1){
            return 1;
    }else{
        let factorial = 1;
        for(let i = 2; i <= num; i++){
            factorial *=i
        }
        return factorial
    }
}

function factorial_recursive(num){
    if(num=== 0 || num === 1){
        return 1
    }
    
    return num * factorial_recursive(num-1);
}

module.exports = {factorial, factorial_recursive};