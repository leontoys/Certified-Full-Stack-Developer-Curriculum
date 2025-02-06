var addTwoNumbers = function(l1, l2) {
    //const l1_reversed = Number(l1.toReversed().join(""))
    //const l2_reversed = Number(l2.toReversed().join(""))
    //const l3 = l1_reversed + l2_reversed
    //const l3_string = String(l3).split("").reverse()
    //const l3_numbers = l3_string.map(element=>Number(element))
    //return String(Number(l1.toReversed().join("")) + Number(l2.toReversed().join(""))).split("").reverse().map(element=>Number(element))
    return String(Number(l1.reverse().join("")) + Number(l2.reverse().join(""))).split("").reverse().map(element=>Number(element))
    //console.log(l1_reversed)
    //console.log(l3_string)
};

console.log(addTwoNumbers([2,4,3],[5,6,4]))