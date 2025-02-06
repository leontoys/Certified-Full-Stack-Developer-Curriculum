/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
/* var twoSum = function(nums, target) {
    for(let i=0;i,i<nums.length;i++){
        for(let j=0;j<nums.length;j++){
            if(i!==j && nums[i]+nums[j]===target){
                return [i,j]
            }
        }
    }
};
*/
var twoSum = function (nums, target) {
  for (let i = 0; i, i < nums.length; i++) {
    const sum = (element)=> element + nums[i] == 18
    const index = nums.findIndex(sum);
    if (index!== i && index !== -1) {
      return [i, index];
    }
  }
};

console.log(twoSum([3,2,4],6))
console.log(twoSum([2, 7, 11, 15], 9));
//console.log(twoSum([3,3],6))
