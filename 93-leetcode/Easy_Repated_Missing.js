/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function(grid) {
    let n = grid.length
    let freq = {}
    let missing = -1
    let repeat = -1

    for (const row of grid) {
        for(const num of row){
            freq[num] = freq[num] ? freq[num]+1 : 1
        }
    }

    for (let index = 1; index < (n*n)+1; index++){
        if(!freq[index]){
            missing = index
        }
        else if(freq[index]===2){
            repeat = index
        }
    }

    return [repeat,missing]
};

console.log(findMissingAndRepeatedValues([[1,3],[2,2]]))
console.log(findMissingAndRepeatedValues([[9,1,7],[8,9,2],[3,4,6]]))