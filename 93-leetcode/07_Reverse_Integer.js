/**
 * @param {number} x
 * @return {number}
 */
// let us not use string
/* var reverse = function (x) {
  const y =
    x > 0
      ? Number(
          String(x > 0 ? x : x * -1)
            .split("")
            .toReversed()
            .join("")
        )
      : Number(
          String(x > 0 ? x : x * -1)
            .split("")
            .toReversed()
            .join("")
        ) * -1;

  //if number is outside the range, then return zero
  if ((y > 0 && y > 2 ** 31) || (y < 0 && y * -1 > 2 ** 31 - 1)) {
    return 0;
  } else {
    return y;
  }
}; */

var reverse = function (x) {
  let y = x >=0 ? x : x * -1
  let factor = 1

  //now keep dividing by 10
  function reverse_number(x){
    //base condition
    if(x < 10){
        return x
    }
    //other wise keep diving by 10
    let remainder = x % 10
    let quotient = (x-remainder) / 10
    let reversed = reverse_number(quotient)
    factor = factor * 10 
    return ( remainder*factor + reversed )
  }

  y = reverse_number(y)

  y = x >= 0 ? y : y*-1

  //if number is outside the range, then return zero
  if ((y > 0 && y > 2 ** 31) || (y < 0 && y * -1 > 2 ** 31 - 1)) {
    return 0;
  } else {
    return y;//reversed value
  }

};

console.log(reverse(123)); //321
console.log(reverse(-123)); //-321
console.log(reverse(120)); //21
console.log(reverse(1534236469)); //expect 0
console.log(reverse(1463847412)); //expect reversed
console.log(reverse(-2147483648)); //expect 0
console.log(reverse(-2147483412)); //expect reversed
