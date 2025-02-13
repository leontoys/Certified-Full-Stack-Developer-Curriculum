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


/* var minOperations = function(nums, k) {
        
    let operations = 0    
    while(nums.length >= 2){  
        //find the minimum
        let minIndex = 0
        let maxIndex = 1//second smallest
        if(nums[0] > nums[1]){
            minIndex = 1
            maxIndex = 0
        }
        for(let i=2;i < nums.length;i++){
            //we need to find the smallest of these three
            if(nums[i] < nums[minIndex])//minindex is the least so if i is less than that
            {
                maxIndex = minIndex//this becomes second small
                minIndex = i//smallest
            }
            else if(nums[i] < nums[maxIndex]){
                maxIndex = i//second smallest
            }        
        }
        //after this loop we have the minium
        let minimum = nums[minIndex]
        if(minimum >= k){
            break
        }
        //now remove this from 
        nums.splice(minIndex,1)
        //after this loop we have the minium
        let maximum = nums[maxIndex] 
        nums.splice(maxIndex,1)
        let sum = (2*minimum)+maximum
        //add this number
        nums.unshift(sum)
        operations++
    }    

    return operations

    };  
 */


var minOperations = function(nums, k) {
//sort nums array
nums.sort((a, b) => a - b);
let b = []
let operations = 0

//now loop through this array
for(let i = j= 0 ; i <10 ;  ){
    //i < nums.length && nums[i] < k && nums.length >=2
    //we have to find the largest among the two arrays
    //the old array, the new array that has sum
    if(nums.length+b.length < 2){
        //if we have less than two elements
        //jump off 
        break
    }

    //find the smallest among the two arrays
    

}

};

console.log(minOperations([2,11,10,1,3],10))
console.log(minOperations([1,1,2,4,9],20))