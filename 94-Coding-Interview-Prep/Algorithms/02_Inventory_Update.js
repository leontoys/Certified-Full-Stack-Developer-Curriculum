function updateInventory(arr1, arr2) {
    let result = {}
    let sorted_array = []
    //turn arr1 into object
    arr1.forEach(element1=>result[element1[1]]=element1[0])

    //loop through array2
    arr2.forEach(element2=> result[element2[1]]===undefined //check if item in result
        ? result[element2[1]]=element2[0] //if not found, add it to result
        : result[element2[1]]+=element2[0]) //if found, add the count
    
    //sort the result keys
    Object.keys(result).toSorted().forEach(key=>sorted_array.push([result[key],key]))

    return sorted_array
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

//updateInventory(curInv, newInv);
console.log(updateInventory(curInv,newInv))