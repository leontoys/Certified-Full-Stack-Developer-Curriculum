/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var closestPrimes = function(left, right) {
let num1 = -1
let num2 = -1
let primes = []

//function to check if a number is prime
const isPrime = (num)=>{
    let result = true
    //check till its squre root starting from 2
    for(let i = 2; i <= Math.floor(Math.sqrt(num)); i++ ){
        if(num % i === 0){
            result = false
            break
        }
    }
    return result
}
    
//find the first prime number starting from left
for(let i = left; i <= right; i++){
    //now we have to check if this is prime
    if(isPrime(i)){
        num1 = i 
        break
    }
}

//find the next prime number
for(let i = num1 + 1; i<=right; i++){
    //check if this is prime
    //now we have to check if this is prime
    if(isPrime(i)){
        num2 = i 
        break
    }    
}

if(num1 === -1 || num2 === -1){
    num1 = -1
    num2 = -1
}

return [num1,num2]
};

console.log(closestPrimes(10,19))
console.log(closestPrimes(4,6))