/**
 * @param {string} pattern
 * @return {string}
 */
var smallestNumber = function(pattern) {
    //count the number of Ds and Is
    let result = []
    let num_stack = []
    //now loop again
    for(let i=0; i <= pattern.length; i++){
        num_stack.push(i+1)
        //if we have reached end of length or found I
        if(pattern[i]==="I"||i===pattern.length){
            while(num_stack.length>0){
                result.push(num_stack.pop())
            }
        }
    }
    return result.join("")

};

console.log(smallestNumber("IIIDIDDD"))
console.log(smallestNumber("DDD"))