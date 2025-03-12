/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function(nums) {

    let pos = neg = 0

    for(let i = 0; i < nums.length; i++){
        nums[i] < 0 
        ? neg++ 
        : nums[i]>0
        ? pos++
        : false
    }

    return neg > pos ? neg : pos
    
};