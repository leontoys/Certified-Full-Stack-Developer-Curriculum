/**
 * @param {string[]} nums
 * @return {string}
 */
var findDifferentBinaryString = function(nums) {
    let answer = []
    //cantor's diagonal arguments
    for(let i = 0 ; i < nums.length; i++){
        answer[i]  =  nums[i][i]==="0" ? "1" : "0"
    }

    return answer.join("")
};

console.log(findDifferentBinaryString(["01","10"]))
console.log(findDifferentBinaryString(["00","01"]))
console.log(findDifferentBinaryString(["111","011","001"]))