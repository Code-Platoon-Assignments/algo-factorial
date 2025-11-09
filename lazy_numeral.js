function toRomanLazy(num){
    
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
    const romanNumArray = []
    
    for(let letter of romanNumeralPriorityOrder){
        const value = romanNumeralToArabic[letter]
        
        const romanModArabic = num % value 
        console.log(`This is ${romanModArabic} `)
        const count_floor = Math.floor(num / value)
        console.log(`This is the floor ${count_floor}`)
        if(count_floor > 0){
            romanNumArray.push(letter.repeat(count_floor)) //get first prefix then iterate through based on count_floor 
        }
        
        num = romanModArabic; //after first pass - the num will be updated with first modulo value so 
        if(num == 0) break;
    }
    return romanNumArray.join('');
}
module.exports = {toRomanLazy}
    