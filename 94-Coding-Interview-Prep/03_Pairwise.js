function pairwise(arr, arg) {
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
        //console.log(filtered)
        //in the keys of this filtered object search if the difference is there or not


      //check if number exists in the array - excluding the current element
      //const filtered = arr.filter((element,index)=>index!==i)
      //const found = filtered.indexOf(difference);
      const found = Object.entries(filtered).filter(([key,value])=>value==difference)
      console.log(found)

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
}

//console.log(pairwise([1, 4, 2, 3, 0, 5], 7))//should return 11
//console.log(pairwise([1, 3, 2, 4], 4))//should return 1
console.log(pairwise([1, 1, 1], 2))//should return 1
