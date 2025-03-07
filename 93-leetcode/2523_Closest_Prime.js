/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var closestPrimes = function (left, right) {
  let num1 = -1;
  let num2 = -1;
  let previous = 0;
  let smallest_diff = 0;

  //function to check if a number is prime
  const isPrime = (num) => {
    let result = true;
    //check till its squre root starting from 2
    for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
      if (num % i === 0) {
        result = false;
        break;
      }
    }
    return result;
  };

  let i = left < 2 ? 2 : left

  //find the first prime number starting from left
  for (; i <= right; i++) {
    if (isPrime(i)) {
      //if it is prime
      if (previous) {
        //only if it is a second time
        if ( (smallest_diff === 0) || (smallest_diff && i-previous < smallest_diff) ){
            smallest_diff = i - previous;
            num1 = previous;
            num2 = i; 
            //if smallest difference is 2, then break off
            if(smallest_diff ===2){
                break
            }
      }
    }
    previous = i;

  }
}

    return [num1, num2];
};

console.log(closestPrimes(10, 19));
console.log(closestPrimes(4, 6));
console.log(closestPrimes(19, 31)); //expects 29,
