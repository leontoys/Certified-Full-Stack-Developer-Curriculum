/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
var minimumRecolors = function(blocks, k) {
    let minimum_passes = 101
    let whites = 0
    let length = 0
    //console.log("length",blocks.length)

    for(let i = 0; i <= blocks.length; i++){
        //console.log(blocks[i])
        blocks[i]==="W"? whites++:null
        //console.log("whites",whites)
        length++    
        //console.log("length",length) 
        if(length===k){
            //console.log("yes length=",k)
            //if the number of passes is less than minimum passes then make 
            //this the minimum pass
            //console.log("minimum",minimum_passes)
            //console.log("whites",whites)
            minimum_passes = whites < minimum_passes ? whites : minimum_passes 
            console.log("minimum",minimum_passes)
            //just reduce length by one, so that it increase by 1 one next time
            length--
            console.log("length",length)
            console.log("i-k",i-k)
            blocks[i-k]==="W"? whites--:null
            console.log("whites",whites)
        }

    }

    return minimum_passes
};

console.log(minimumRecolors("WBBWWBBWBW",7))//3
console.log(minimumRecolors("WBWBBBW",2))//0
console.log(minimumRecolors("WWBBBWBBBBBWWBWWWB",16))//6