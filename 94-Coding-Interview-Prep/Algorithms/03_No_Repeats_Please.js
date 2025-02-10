/* function permAlone(str) {

    //substrings
    //first create all permuations
    const permuations = (sub,i=0)=>{     
        //base condition
        if(sub.length===2){
            //we have to combinations
            return [sub,sub.split("").toReversed().join("")]
        }
        //recurse 
        else{
            //combinations
            let combinations = []
            //get the first character
            let character = sub.charAt(i)
            //remove one character
            let remaining = sub.substring(0,i)+sub.substring(i+1)
            const subs = permuations(remaining)
            //for each of these 
            subs.forEach(element => {
                combinations.push(`${character}${element}`)
            });
            console.log("combinations",combinations)
            return combinations
        }
    }
    for (let index = 0; index < str.length; index++) {
        permuations(str,index)
    }


  } */

/* function permAlone(str) {
  /**
   * how is permutatation done
   * iterate through the letters
   *  so combos starting with a in first iteration
   *      then remove a - and send bcd to some function
   *      let it iterate through substrings
   *      starting with b
   *          remove the first letter and then send cd to some function
   *              so when the string length is 2
   *              let it send back cd and dc
   *      starting with c
   *      starting with d
   *  then b
   *  then c
   *  then d
   */
/*   function permuatations(str){
  if (str.length === 2) {
    return [str, str.split("").toReversed().join("")];
  }

      //combinations
      let combinations = [];
  for (let index = 0; index < str.length; index++) {
    //get the ith character
    let character = str.charAt(index);
    //remove one character
    let remaining = str.substring(0, index) + str.substring(index + 1);
    //call permuatations
    const substrings = permuatations(remaining);
    console.log(substrings);
    //for each of these
    substrings.forEach((element) => {
      combinations.push(`${character}${element}`);
    });
    console.log("combinations", combinations);
    return combinations
  }
} */
/*     permuatations(str)
} */ 

//may be I have a different algorithm - but it is better to learn the correct algorithm first
//this one was tough

console.log(permAlone("abc"));

/**
 * abcd
 * bacd
 * bcad
 * bcda
 * acbd
 * acdb
 * cabd
 * acbd
 * abdc
 * dabc
 * adbc
 * abdc
 */
