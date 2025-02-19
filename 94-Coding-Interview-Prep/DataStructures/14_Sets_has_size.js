function checkSet(arrToBeSet, checkValue){

    // Only change code below this line
    const set = new Set(arrToBeSet)
    return [set.has(checkValue),set.size]
    // Only change code above this line
 
 }

console.log(checkSet([1,2,3,4],2))