/**
 * @param {string} s
 * @return {number}
 */
 var myAtoi = function(s) {
    let found_nonzero = false
    let is_negative = false
    let is_positive = false
    let number = 0
    const regex_number = /\d/
    let found_digit = false
    let regex_allowed = /[\d\s-+]/

    //loop through the string
    for(let i=0; i < s.length ; i++){
        //is this allowed?
        if(!regex_allowed.test(s[i])){
            break
        }

        //if we have found a digit and then if a non-digit 
        //comes in skip it
        //if it is a non-digit character then stop
        if(found_digit && !regex_number.test(s[i])){
            break
        }

        //ignore the blank spaces
        if(s[i]===" "){
            continue
        }

        //if it is positive or negatives
        if(s[i]==="+"){
            //if the next character is positive or negative - then break
            if(!regex_number.test(s[i+1])){
                break
            }
            is_positive = true
            continue
        }

        if(s[i]==="-"){
            //if the next character is positive or negative - then break
            if(!regex_number.test(s[i+1])){
                break
            }         
            is_negative = true
            continue
        }

        //you have found a digit
        found_digit = true

        //till you find non zero skip the zeros
        if(found_nonzero===false && s[i]==="0"){
            continue
        } 
        else{
        //now we have found non zero
            found_nonzero = true
        }

        //now start creating number
        //if the number exists multiply by 10 and add number
        number = number ? number * 10 + Number(s[i]) : Number(s[i])

    }

    //if the plus sign or minus sign haven't come
    //then it is positive
    if(is_positive===false && is_negative===false){
        is_positive = true
    }

    if( ( is_positive && number > (2**31)-1 ) ) {
        number = (2**31)-1
    }

    if(( is_negative && number > 2**31 ) ){
        number =  2**31
    }

    return is_positive ? number : number * -1

}; 


console.log(myAtoi("42"))
console.log(myAtoi("   -042"))
console.log(myAtoi("1337c0d3"))
console.log(myAtoi("0-1"))
console.log(myAtoi("words and 987"))
console.log(myAtoi("-91283472332"))
console.log(myAtoi("+1"))
console.log(myAtoi("  +  413"))