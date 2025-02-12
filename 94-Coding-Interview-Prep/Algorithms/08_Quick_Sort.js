/**
 * This is similar to merge sort in the sense it is a divide and conquer
 * But it differs because it does it in-place without creating left and right arrays
 * Some important intermediate steps are partitioning - and swapping
 */

function quickSort(array){
  //base case 
  if(array.length < 2){
    return array
  }
  //recursion
  let pivot = array[0] //first element
  //loop through array and fill left and right
  let left = []
  let right = []

  for(let i=1; i < array.length; i++ ){
    if(array[i]<=pivot){
      left.push(array[i])
    }
    else{
      right.push(array[i])
    }
  }

  return quickSort(left).concat(pivot).concat(quickSort(right))
}

/* Note - this didn't pass FCC test for some reason though it gives correct results
function quickSort(array,left=0,right=array.length-1){
  //base condition - ie, left crosses right
  if(left >= right){
    return
}

  //function - this will get the index
  const partition = (array,left,right)=>{
    //choose last element as pivot
    let pivot = array[right]
    //pointer for tracking boundary 
    //this will be next pivot
    let i = left - 1

    //move from left -> right
    for(j= left; j < right ; j++){
      //if an element smaller than pivot is found
      if(array[j] < pivot){
        i++//increment 
        //swap ith element which is larger or boundary with j
        swap(array,i,j)
      }
      //if a[j] was larger, i will still be pointing
      //to it infact to show the boundary
    }  

    //now i will be pointing to boundary
    //so move pivot to here
    swap(array,i+1,right)
    return i+1 //return pivot

  }  

  //swap function
  const swap = (array,i,j)=>{
    let temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }

  //recursion
  let pivotIndex = partition(array,left,right)
  quickSort(array,left,pivotIndex-1)
  quickSort(array,pivotIndex+1,right)

  return array

} */



console.log(quickSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]))

/*  Note - I didn't get it on day 1 
  function quickSort(array) {
   console.log(array) 
  //create a swap function
  const swap = (items, left, right) => {
    //now we need to swap - if left value is greater than right value
    //if (items[left] > items[right]) {
    let temp = items[left];
    items[left] = items[right];
    items[right] = temp;
    //  }
  };

  //base condition
  if (array.length === 1) {
    return array;
  }

  //get the pivot - last element
  let pivotIndex = array.length - 1;
  //the below steps need to be going on
  //till left and right cross

  //now from left move to right
  //as long as it is less than pivot it is fine
  //but if it is greater than pivot then we need to think
  let left = 0;
  let right = pivotIndex - 1;

  while (left <= right) {
    while (array[left] <= array[pivotIndex]) {
      //means it will come out
      //when we see a value which is greater than pivot
      left++;
    }

    while (array[right] >= array[pivotIndex]) {
      //means it will come out
      //when we see a value which is less than pivot
      right--;
    }

    //swap the stuff
    swap(array, left, right);
    left++;
    right--;
  }
  //when this exits
  //swap pivot with left
  swap(array, left, pivotIndex);

  //sort left side
  console.log(array.slice(0, left))
  if (array.slice(0, left)) {
    quickSort(array.slice(0, left));
  }
//sort right side
  console.log(array.slice(left,array.length-1))
  if (array.slice(left+1,array.length-1)) {
    quickSort(array.slice(left,array.length-1));
  }

  return array;
  // Only change code above this line
}

console.log(quickSort([9, 5, 2, 6, 1, 11, 3]));
 */