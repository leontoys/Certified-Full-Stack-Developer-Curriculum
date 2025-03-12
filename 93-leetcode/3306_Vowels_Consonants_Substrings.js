/**
 * @param {string} word
 * @param {number} k
 * @return {number}
 */
var countOfSubstrings = function(word, k) {
    let result = 0


    let a = false
    let e = false
    let i = false
    let o = false
    let u = false
    let consonants = 0    
    for( let left = 0, right = 0 ; left + 5 + k <= word.length; right++   ){
        //count the number of consonants
        //and make sure that is exactly k
        switch (word[right]) {
            case 'a':
                a = true
                break;
            case 'e':
                e = true
                break;
            case 'i':
                i = true
                break;            
            case 'o':
                o = true
                break;            
            case 'u':
                u = true
                break;                        
            default:
                consonants++
                break;
        }

        //if consonants have crossed k, then reset to k
        consonants = consonants > k ? 1 : consonants

        //if consonats have reached k
        if( consonants === k && a && e && i && o && u ){
            result++
            left = right
            //reset
        }
    }
    return result
};

console.log(countOfSubstrings("aeioqq",1))//0
console.log(countOfSubstrings("aeiou",0))//1
console.log(countOfSubstrings("ieaouqqieaouqq",1))//3