/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var hasSpecialSubstring = function(s, k) {
    //loop through string
    for(let i=0; i < s.length-k; i++){
        console.log(s[i])
    }
    return false
};

console.log(hasSpecialSubstring("aaabaaa",3))