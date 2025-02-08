/* function pairwise(arr, arg) {
  let sum = 0;
  let used = [];

  //loop through each item in the array
  for (let i = 0; i < arr.length; i++) {
    //check if this number exists in the used array
    //if yes exit
    //otherwise continue
    if (!used.includes(arr[i])) {
      //find the difference  between this element and the arguments
      const difference = arg - arr[i];

        //array object = create an object with {index:value}
        const arrObj = {...arr}
        //console.log(arrObj)
        //filter this object where key not equal to index
        const filtered = Object.entries(arrObj).filter(([key,value])=>key!=i)
        console.log("filtered",filtered)
        //in the keys of this filtered object search if the difference is there or not


      //check if number exists in the array - excluding the current element
      //const filtered = arr.filter((element,index)=>index!==i)
      //const found = filtered.indexOf(difference);
      const found = Object.entries(filtered).filter(({key,value})=>console.log(value))
      console.log("found",found)

      //if yes get the index
      if (found !== -1) {
        //now get the index of this in the original array
        const index = arr.indexOf(difference)
        //add the current index + new one + sum
        sum += i + index;
        //push this to used array
        used.push(arr[i]);
        used.push(arr[index]);
      }
    }
  }

  return sum;
} */

/* function pairwise(arr, arg) {
  let sum = 0;
  let used = [];

  //loop through each item in the array
  for (let i = 0; i < arr.length; i++) {
    //check if this number exists in the used array
    //if yes exit
    //otherwise continue
    //if (!used.includes(arr[i])) {
      //find the difference  between this element and the arguments
      const difference = arg - arr[i];

      //check if number exists in the array - excluding the current element
      //get elements after the current index
      const filtered = arr.slice(i+1)
      const found = filtered.indexOf(difference);

      //if yes get the index
      if (found !== -1) {
        //now get the index of this in the original array
        const index = found + i + 1
        //add the current index + new one + sum
        sum += i + index;
        //push this to used array
        //used.push(arr[i]);
        //used.push(arr[index]);
      }
    //}
  }

  return sum;
} */

function pairwise(arr, arg) {
  let sum = 0
  let cache = []
  //create an object with key-value pair as index:value
  const arrObj = { ...arr };
  //create another object as a copy of this
  //now loop through the first object
  Object.entries(arrObj).forEach(([key, value]) => {
    //first value comes
    console.log("key",key,"value",value)
    //check if this is in the cache and skip if it is there
    if (!cache.includes(key)) {
    //calculate the difference
    const difference = arg - value;
    console.log("difference",difference)
    //delete the current object from the filter object
    delete arrObj[key];
    console.log("mainobject",arrObj)
    //check if the difference exist in this - but how will we look up with value?
    const index = Object.keys(arrObj).find(
      (key) => arrObj[key] === difference
    );
    console.log("index",index)
    //if no - then next iteration
    if (index) {
      //get the index
      //add the current index with this index
      sum += Number(key) + Number(index)
      //delete object [property]so that next time we won't take this
      delete arrObj[index]
      //put the index in cache so that we can skip the iteration
      cache.push(index)
    }
  }
  });
  return sum
}

console.log(pairwise([1, 4, 2, 3, 0, 5], 7)); //should return 11
console.log(pairwise([1, 3, 2, 4], 4)); //should return 1
console.log(pairwise([1, 1, 1], 2)); //should return 1
console.log(pairwise([0, 0, 0, 0, 1, 1], 1)); //should return 10
