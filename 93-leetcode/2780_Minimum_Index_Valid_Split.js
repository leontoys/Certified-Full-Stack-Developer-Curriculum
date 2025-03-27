/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumIndex = function(nums) {

    let firstMap = {}
    let secondMap = {}
    let result = -1

    //first count all frequencies and move it to first
    for(let i = 0; i < nums.length; i++){
        secondMap[nums[i]] = secondMap[nums[i]] ? secondMap[nums[i]]+1 : 1
    }
//    console.log("second",secondMap)

    //now let us split - move elements one by one
    for(let i = 0; i < nums.length; i++){
        secondMap[nums[i]] = secondMap[nums[i]] - 1
        firstMap[nums[i]] = firstMap[nums[i]] ? firstMap[nums[i]]+1 : 1

        //now we have to find the dominant element
        console.log("first",firstMap)
        console.log("second",secondMap)

        //frequency of current element in first map
        if( firstMap[nums[i]] *2 > i+1 && 
            secondMap[nums[i]] * 2 > nums.length - i - 1 )
        {
            result = i
            break
        }
 
    }
    
    return result
};

//console.log(minimumIndex([1,2,2,2]))//2
//console.log(minimumIndex([2,1,3,1,1,1,7,1,2,1]))//4
//console.log(minimumIndex([3,3,3,3,7,2,2]))//-1
console.log(minimumIndex([1,1,1]))//0