function sym(...args) {
  let result = [];
  //loop through each array
  args.forEach((element) => {
    let duplicates_removed = [];
    //remove duplicates from the array
    element.forEach((number) => {
      duplicates_removed.includes(number)
        ? false
        : duplicates_removed.push(number);
    });
    //now check if the number is already added to result
    duplicates_removed.forEach((number) => {
      //console.log(number)
      if (result.includes(number)) {
        //console.log("yes");
        //if added remove it from result
        result = result.filter((member) => member !== number);
      } else {
        //otherwise add to result
        //console.log("no");
        result.push(number);
      }
    });
  });
  return result;
}

//console.log(sym([1, 2, 3], [5, 2, 1, 4]));
console.log(sym([1, 2, 3, 3], [5, 2, 1, 4]));
