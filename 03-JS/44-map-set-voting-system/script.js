//new map
const poll = new Map()
//add to map
const addOption = (option)=>{
    if(!option){
        return `Option cannot be empty.`
    }
    //if the option doesn't exist in the map
    if(!poll.has(option)){
        //create empty set
        const optionSet = new Set()
        //add to poll
        poll.set(option,optionSet)
        //return message
        return `Option "${option}" added to the poll.`
    }
    else{
        return `Option "${option}" already exists.`
    }
}

addOption("Palestine")
addOption("Turkey")
addOption("Morocco")
//console.log(poll)

const vote = (option,voterId)=>{
    //check if option exits
    if(!poll.has(option)){
        return `Option "${option}" does not exist.`
    }
    //check if voter has already voted for this option
    const voterSet = poll.get(option)
    //console.log("voterset",voterSet)
    if(voterSet.has(voterId)){
        return `Voter ${voterId} has already voted for "${option}".`
    }
    //otherwise add
    voterSet.add(voterId)
    poll.set(option,voterSet)
    return `Voter ${voterId} voted for "${option}".`
}

//console.log(vote("Gulmohar","Shiyon"))
//console.log(vote("Palestine","Shiyon"))
//console.log(vote("Palestine","Liyon"))//
//console.log(vote("Palestine","Liyon"))
vote("Turkey","Shiyon")
vote("Turkey","Liyon")
vote("Palestine","Niyon")
vote("Palestine","Shilna")

//console.log(poll.get("Palestine"))


const displayResults = ()=>{

let result = "Poll Results:"

poll.forEach((value,key) => {
    //console.log(value,key)
    result += `${key}: ${value.size} votes`
});

return result

}

displayResults()