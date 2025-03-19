/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function(nums) {

    let stack = {}

    for(let i = 0; i < nums.length; i++){
        //if this exist - then delete
        if(stack[nums[i]]){
            delete stack[nums[i]]
        }
        else{
            stack[nums[i]] = true
        }
    }

    return Object.keys(stack).length === 0 ? true : false
    
};

console.log(divideArray([3,2,3,2,2,2]))
console.log(divideArray([1,2,3,4]))