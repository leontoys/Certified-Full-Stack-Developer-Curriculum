var longestPalindrome = function (s) {
    let palindromes = {}
  for (let i = 0; i < s.length; i++) {
    //console.log(s[i])//this is the starting letter
    let sub = s.substring(i, s.length);
    //loop through substrings
    for (let j = 0; sub.length !== 0; ) {
      //console.log("substring", substring);
      //check if they are palindromes
      //put them in object with length-substring
      let isPalindrome = true
      for (let k = 0; k <= sub.length / 2; k++) {
        if (sub[k] !== sub[sub.length-1-k]) {
          //break from this inner loop
          isPalindrome = false
          break
        }
      }
      //console.log("substring",sub,isPalindrome)
      //if it is palindrome
        if(isPalindrome){
        //put them in object with length-substring
        palindromes[sub] = sub.length
        //break out
        break
        }
      //cut substring by one length
      j++;
      sub = s.substring(i, s.length - j);
    }
  }
  //outside loop
  //find the maximum
  const max_length = palindromes ? Object.values(palindromes).toSorted((a,b)=>b-a)[0] : false
  //return the matching key
  return max_length ? Object.keys(palindromes).find(key=>palindromes[key]==max_length) : 0
};

//console.log(longestPalindrome("cbb"))
console.log(longestPalindrome("babad"));
console.log(longestPalindrome("cbbd"));
