/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumSum = function(nums) {
    //function to calculate the sum of digits
    const sum_digits = (num)=>{
        let sum = 0
        //as long as number is greater than 0
        while(num > 0){
            let remainder = num % 10
            sum += remainder
            num = ( num - remainder ) / 10
        }
        return sum
    }
    //we need a map to store the digit_sum and the numbers
    let pairs = {} //we will store digit sum and the two maximum numbers
    let max = -1

    //iterate through each number
    for(let i = 0; i < nums.length; i++){
        //we need to find the digit sum
        //console.log(sum_digits(nums[i]))
        const key = sum_digits(nums[i])
        const values = pairs[key] || false //for if check
        //check if this exists
        if(values){
            //if found check if it is greater than 
            //the numbers existing 
            //we need to find the greatest of 3 values
            //the two if existing, and the new one
            //console.log(nums[i],values[0],values[1])
            if(nums[i] > values[0]){
                //then the new number is greater than the first one
                pairs[key] = values[0] > values[1] ? [nums[i],values[0]] : [nums[i],values[1]]
                let sum = pairs[key][0] + pairs[key][1]
                if(sum > max){
                    max = sum
                }                
            }
            else if(nums[i] > values[1]){
                pairs[key] = values[0] > values[1] ? [nums[i],values[0]] : [nums[i],values[1]]
                let sum = pairs[key][0] + pairs[key][1]
                if(sum > max){
                    max = sum
                }                                
            }
            //otherwise nothing to do
        }
        //if it doesn't exist add the number
        else{
            pairs[key] = [nums[i],0]
        }
    }
    
    //console.log(pairs)
    return max
};


console.log(maximumSum([18, 43, 36, 13, 7]));
console.log(maximumSum([10, 12, 19, 14]));
console.log(maximumSum([4,6,10,6]))

/*this gave wrong results - dont' know why
/* var maximumSum = function (nums) {
  //result
  let maximum = -1;
  //we need object to keep track
  let number_sum = {};
  //just to make it faster
  let found = false
  //loop trhough the numbers-outer
  //add it to the map
   nums.forEach( number => { 
    //let us convert to string
    let number_string = String(number)
    let remainder = 0
    for(let i = 0; i < number_string.length; i++){
        remainder += parseInt(number_string[i])
    }
    //let remainder = number % 9 || 9
   //loop through  this
    if(number_sum[remainder]){
        found = true
        number_sum[remainder].push(number)
    }
    else{
        number_sum[remainder] = [ number ]
   }})

   if(found==false){//if we haven't found anything till now
    return maximum //-1
   }

   //loop through the values array which has length more than 2
   //which means it has reoccured and then find the maximum
    Object.values(number_sum).forEach(numbers=>{//this loop runs the worst only 9
    //this is an array
        if(numbers.length>1){
            //now loop through this array - this will make it 
            //do only twice - because we need only two largest number
            //we need to find only the largest two numbers
            for(let i = 0; i < 2; i++){
                for(let j = 0; j < numbers.length ; j++){
                    //swap - bubble sort
                    if(numbers[j] < numbers[j+1]){
                        let temp = numbers[j]
                        numbers[j] = numbers[j+1]
                        numbers[j+1] = temp
                    }
                }
            }
            //we have to only sum the last two numbers - which are the largest !!
            //or in fact bring it to the front
            let sum = numbers[0]+numbers[1]
            if(sum > maximum){
                maximum = sum
            }
        }
        console.log(numbers)
   })

  return maximum;
}; */

/**
 
Performance nees to be improved

var maximumSum = function (nums) {
  //result
  let maximum = -1;
  //we need object to keep track
  let number_sum = {};
  //loop trhough the numbers-outer
  for (let i = 0; i < nums.length; i++) {
    // //we can start inner loop i+1
    // //once we have the sum - we have to add up the digits
    // let number = nums[i];
    // let sum_digits = 0;
    // //that must be a lets say while loop
    // //while sum > 10
    // while (number >= 10) {
    //   //you divide the number by 10
    //   let remainder = number % 10;
    //   //get the remainder - sum of digits+= remainder
    //   sum_digits += remainder;
    //   //subtract the remainder - sum = ( sum - remainder ) /10
    //   number = (number - remainder) / 10;
    // }
    // //once it exits while loop sum of digits+= number
    // sum_digits += number;

    let sum_digits = nums[i]%9===0? 9 : nums[i]%9

    //this needs to be done inside a loop
    //check if any number with the same sum of digits is there
    //loop through the map
    Object.entries(number_sum).forEach(([key, value]) => {
        if(value===sum_digits){ //if we found a number that has same sum of digits
            //add the number with the current number
            let sum = Number(key) + nums[i]
            //is this greater than the maximum?
            if(sum > maximum){
                maximum = sum //then this is the maximum
            }
        }
    });
    //add it to the map
    number_sum[nums[i]] = sum_digits;
  }

  return maximum;
};

 */
