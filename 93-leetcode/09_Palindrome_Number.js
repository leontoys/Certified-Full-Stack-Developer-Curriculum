/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  const number = String(x);
  for (let index = 0; index < number.length / 2; index++) {
    //console.log(number[number.length-1-index])
    if (number[index] !== number[number.length-1-index]) {
      return false;
    }
  }
  return true
};

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));
