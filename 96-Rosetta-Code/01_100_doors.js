/**
 * Note - Only perfect squre numbers will be open at the end - 1,4,9...
 * @param {*} numDoors 
 * @returns 
 */
function getFinalOpenedDoors(numDoors) {
    //closed = 0, open = 1
    const doors = new Array(100).fill(0,0,100)
    let open_doors = []
    //now make pass
    for(let i = 1; i <= doors.length; i++){
        for(let j = 1; ( i * j ) - 1 < doors.length; j++){
            const k = ( i * j ) - 1
            doors[k] = doors[k] === 0 ? 1 : 0 //toggle the doors
        }
    }
    //return the door numbers that are open
    for(let i = 0; i < doors.length; i++){
        if(doors[i]===1){
            open_doors.push(i+1)
        }
    }
    return open_doors
}

console.log(getFinalOpenedDoors(100))