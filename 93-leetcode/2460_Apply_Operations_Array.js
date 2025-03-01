/**
 * @param {number[]} nums
 * @return {number[]}
 */
var applyOperations = function(nums) {
    let nums_result = []
    //iterate over 
    for(let i = 0; i < nums.length; i++){
        if(nums[i]===nums[i+1]){
            nums[i] = 2 * nums[i]
            nums[i+1] = 0
        }
        if(nums[i]!==0){
            nums_result.push(nums[i])
        }
    }
    //fill zeros
    let count = nums.length - nums_result.length - 1
    for(let i = 0; i <= count ; i++){
        nums_result.push(0)
    }

    return nums_result
};

console.log(applyOperations([1,2,2,1,1,0]))
console.log(applyOperations([0,1]))