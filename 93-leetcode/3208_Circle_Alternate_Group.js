/**
 * @param {number[]} colors
 * @param {number} k
 * @return {number}
 */
/* var numberOfAlternatingGroups = function(colors, k) {
    console.log("starts outer loop")
    //start a loop from the first
    let count = 0
    for(let i = 0; i < colors.length; i++){
        //start from this we have to get k numbers
        let j = i
        for(let length = 1; length < k ; j++ ){ //frmo the next till k numbers   
            //compare current with next
            let current_index = j >= colors.length ? j - colors.length : j
            let next_index = j+1 >= colors.length ? j+1-colors.length : j+1
            if(colors[current_index]===colors[next_index]){
                i = current_index
                break
            }
            if(length+1===k){//if it reaches till end without any breaks - all good - we found a group
                count++
            }
            length++
        }   
        console.log("exited inner loop")     
    }
    return count
}; */

//sliding window
var numberOfAlternatingGroups = function(colors, k) {
    //first to handle circular nature, add the first k-1 elements to the array
    for(let i = 0; i < k-1; i++ ){
        colors = colors.concat(colors[i])
    }

    let length = colors.length
    let count = 0
    //now sliding window
    for(let left = 0, right = 1; right < length ; right++ ){
        //if the colors are same the pattern breaks
        //shift to the rightmost and then continue from there
        if(colors[right]===colors[right-1]){
            left = right
            continue
        }

        //once right has moved more than k, then 
        //we need to shift the window from the left
        if(right-left === k){
            left++
        }

        //if first k elements are all good
        //then increment the count
        if(right-left+1 === k){
            count++
        }
    }

    return count
}

console.log(numberOfAlternatingGroups([0,1,0,1,0],3))//3
console.log(numberOfAlternatingGroups([0,1,0,0,1,0,1],6))//2
console.log(numberOfAlternatingGroups([1,1,0,1],4))//0