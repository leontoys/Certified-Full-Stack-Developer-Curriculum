/**
 * @param {string[]} strs
 * @return {string}
 */
//Note - I solved this in 15 minutes

var longestCommonPrefix = function(strs) {
    
    //ideally we should take the shortest word
    //but that requires a loop, so to avoid that
    //get the first word - and loop through that for now
    let prefix = ""

    for(let i=0; i<strs[0].length; i++){ //loop through each character of the first word

        //now loop through the strings
        //starting from the second one
        for(let j=1; j<strs.length; j++){
            //if the first letter or the ith letter
            //doesn't match - then jump out
            if(strs[0][i]!==strs[j][i]){
                return prefix
            }
        }
            //if it matches
            //stitch it to the string
                prefix += strs[0][i]     

    }

    return prefix

};

console.log(longestCommonPrefix(["flower","flow","flight"]))
console.log(longestCommonPrefix(["dog","racecar","car"]))