/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
/* 
    Note - worked but performance not good
    var minOperations = function(nums, k) {

    let min = 0
    let max = 0
    let operations = 0

    //keep doing as long atleast one number is less than
    //or array has minimum 2 elements
    while(nums.length >=2){
    //we have to find the two smallest number of the array
    //lets do select sort
    for(let i=0; i < 2; i++){//only two iterations
        let minIndex = i
        for( let j=i+1; j < nums.length; j++ ){
            //compare
            if(nums[j] < nums[minIndex]){//then we need to swap
                minIndex = j
            }
        }
        //so we have to swap min index element with i
        let temp = nums[i]
        nums[i] = nums[minIndex]
        nums[minIndex] = temp
    }
    //2*min of that + max - this has to be inserted
    //before that we have to remove those two numbers
    min = nums.shift()
    max = nums.shift()
    if(min >= k){
        break
    }
    let sum = (2*min)+max
    //add this to nums
    nums.unshift(sum)
    operations++    
    //console.log(nums)
    //console.log(operations)
} */


    var minOperations = function(nums, k) {
        
    let operations = 0    
    while(nums.length >= 2){  
        //find the minimum
        let minIndex = 0
        let maxIndex = 0//second smallest
        for(let i=1;i < nums.length;i++){
            if(nums[minIndex] > nums[i]){
                minIndex = i
            }
        }
        //after this loop we have the minium
        let minimum = nums[minIndex]
        if(minimum >= k){
            break
        }
        //now remove this from 
        nums.splice(minIndex,1)
        //now find the next smallest
        minIndex = 0
        for(let i=1;i < nums.length;i++){
            if(nums[minIndex] > nums[i]){
                minIndex = i
            }
        }
        //after this loop we have the minium
        let maximum = nums[minIndex] 
        nums.splice(minIndex,1)
        let sum = (2*minimum)+maximum
        //add this number
        nums.unshift(sum)
        operations++
    }    

    return operations

    };  

console.log(minOperations([2,11,10,1,3],10))
console.log(minOperations([1,1,2,4,9],20))