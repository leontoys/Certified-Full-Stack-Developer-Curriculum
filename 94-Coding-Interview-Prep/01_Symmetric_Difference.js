function sym(...args) {
  let result = [];
  //loop through each array
  args.forEach((element) => {
    let duplicates_removed = [];
    //remove duplicates from the array
    element.forEach((number) => duplicates_removed.includes(number) ? false: duplicates_removed.push(number));
    //now check if the number is already added to result
    duplicates_removed.forEach((number) => result.includes(number) ? result = result.filter((member) => member !== number) : result.push(number))
  })
    return result;
} 

/* function sym(...args) {
  //using sets
  let result = new Set()
  args.forEach(element => result = result.symmetricDifference(new Set(element)) )
  return Array.from( result )
} */

console.log(sym([1, 2, 3], [5, 2, 1, 4]));
console.log(sym([1, 2, 3, 3], [5, 2, 1, 4]));
