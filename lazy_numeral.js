function toRomanLazy(num){ //6
    
    const romanNumeralToArabic = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }
    
    const romanNumeralPriorityOrder = ['M', 'D', 'C', 'L', 'X', 'V','I'];
    const romanNumArray = [] //stores the converted files
    
    for(let letter of romanNumeralPriorityOrder){  //iterate through each letter
        
        const value = romanNumeralToArabic[letter] // get key - letter 'M' to start
        
        const romanModArabic = num % value // 6%1000 = remainder 6
        const count_floor = Math.floor(num / value) 6/1000 = 0 
        if(count_floor > 0){
            romanNumArray.push(letter.repeat(count_floor)) // first iteration will be 0 so M is not pushed
        } 
        //will continue on 
        num = romanModArabic; // first iteration = 6  
        if(num == 0) break;
    }
    return romanNumArray.join('');
}
module.exports = {toRomanLazy}


//walk-thru of 6
//Iteration 1
/* num = 6
value = M
romanModArabic = 6%1000 -> 6
count_floor = Math.floor(6/1000) -> 0
if counter floor > 0 -> false
num = romanModArabic -> 6

//Fast forward to iteration 6 - containing 'V'
num = 6
value = V (5)
romanModArabic = 6 % 5 -> remainder 1
count_floor = 6/5 -> 1
if count_floor > 0 -> true so enter loop 
romanNumArray.push(letter(V).repeat(counter_floor)) -> V + count_floor) so repeat this 1 times

num = romanModArabic -> 1

go back to the top --> 1 
*/ 