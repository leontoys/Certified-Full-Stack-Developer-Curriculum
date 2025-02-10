/**
 *You are swapping immediately whenever a smaller element is found instead of
  tracking the smallest element in the inner loop and swapping only 
  once at the end of each outer loop iteration.
This results in more swaps than necessary, making it inefficient. 

 */

/* function selectionSort(array) {
    // Only change code below this line
     
    //iterate through the array
    //find the smallest
    //swap it with the first

    //so we need an outer loop that goes from o->end
    //assume this is the smallest ie, a[i]
        //we need an innerloop that starts 1+oouter loop->end
            //if smallest a[i] > a[j] 
            //then swap, temp = smallest
            // smallest = a[j] 
            // a[j] = temp


    for(let i=0;i<array.length;i++){

        for(let j=i+1;j<array.length;j++){

            if(array[i]>array[j]){
                let temp = array[i]
                array[i] = array[j]
                array[j] = temp
            }
        }
    }       

    return array

    // Only change code above this line
  } */

function selectionSort(array) {
  // Only change code below this line
  //outer loop - this is what will become sorted part after the inner loop
  for (let i = 0; i < array.length; i++) {
    let minimum_index = i
    //inner loop - starts from one step ahead
    //this is the unsorted part
    for (let j = i+1; j < array.length; j++) {
        //is the unsorted group element less than the min?
        if(array[j] < array[minimum_index]){
            //set minimum index to this
            minimum_index = j
        }
    }
    //after the inner loop is over
    //the minimum index will have the minimum among all
    //put this to the current position
    //swap
    let temp = array[i]
    array[i] = array[minimum_index]
    array[minimum_index] = temp
  }
  return array;
  // Only change code above this line
}

//selection sort
console.log(
  selectionSort([
    1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92,
  ])
);
