/**
 * @param {number} days
 * @param {number[][]} meetings
 * @return {number}
 */
var countDays = function(days, meetings) {
    meetings.sort((a,b)=>a[0]-b[0])
    console.log(meetings)
    let latestEnd = 0
    let freeDays = 0
    meetings.forEach(meeting => {
        //calculate days
        //is the starting date of this meeting 
        //after latest end date?
        if(meeting[0] > latestEnd+1){
            //means there is a gap
            //also accounts for the starting 
            freeDays += meeting[0] - latestEnd - 1
        }
        //which is greater? last end date or end date?
        latestEnd = meeting[1] > latestEnd ? meeting[1] : latestEnd
    });

    //add remaining free days
    freeDays += days - latestEnd

    return freeDays
};

//console.log(countDays(10,[[5,7],[1,3],[9,10]]))
//console.log(countDays(5,[[2,4],[1,3]]))
//console.log(countDays(6,[[1,6]]))
//console.log(countDays(10,[[5,7],[2,3],[9,10]]))
console.log(countDays(14,[[6,11],[7,13],[8,9],[5,8],[3,13],[11,13],[1,3],[5,10],[8,13],[3,9]]))
