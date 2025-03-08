/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let seen = {}
    let duplicate = false

    for(let i = 0; i < nums.length ; i++){
        if(seen[nums[i]]){
            duplicate = true
            break
        }
        else{
            seen[nums[i]] = true
        }
    }
    return duplicate
};

console.log(containsDuplicate([1,2,3,1]))
console.log(containsDuplicate([1,2,3,4]))
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]))