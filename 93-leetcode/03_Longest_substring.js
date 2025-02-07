/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let letters = [];
  let count = 0;
  s.split("").forEach((element) => {
    if (letters.includes(element)) {
      count = count > letters.length ? count : letters.length;
      letters = letters.slice(letters.indexOf(element)+1)
    }
    letters.push(element);
  });
  return count > letters.length ? count : letters.length;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
console.log(lengthOfLongestSubstring("aab"));
console.log(lengthOfLongestSubstring("dvdf"))
