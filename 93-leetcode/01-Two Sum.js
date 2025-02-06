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
/* var twoSum = function (nums, target) {
  for (let i = 0; i, i < nums.length; i++) {
    const sum = (element)=> element + nums[i] == target
    const index = nums.findIndex(sum);
    if (index!== i && index !== -1) {
      return [i, index];
    }
  }
}; */

/*   var twoSum = function (nums, target) {
  for (let i = 0; i, i < nums.length; i++) {
    const difference = target - nums[i]
    const index = nums.lastIndexOf(difference);
    if (index!== i && index !== -1) {
      return [i, index];
    }
  }
}; 
 */
var twoSum = function (nums, target) {
  let numbers = {}
  for (let i = 0; i, i < nums.length; i++) {
    //calculate difference
    //console.log("target",target)
    //console.log("number",nums[i])
    const difference = target - nums[i]
    //console.log("difference",difference)
    if (numbers.hasOwnProperty(difference)) {
      return [numbers[difference],i]
    }
    numbers[nums[i]]=i
    //console.log("numbers",numbers)
  }
}; 

console.log(twoSum([3,2,4],6))
console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3,3],6))
