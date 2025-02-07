function fiboEvenSum(n) {
    let a = 1
    let b = 2
    let sum = 0 

    while(b <= n){
        b % 2 == 0 ? sum += b : false
        b = a + b
        a = b - a
    }

    return sum;
  }

console.log(fiboEvenSum(8))
console.log(fiboEvenSum(10))
console.log(fiboEvenSum(34))
console.log(fiboEvenSum(60))
console.log(fiboEvenSum(1000))
console.log(fiboEvenSum(100000))
console.log(fiboEvenSum(4000000))