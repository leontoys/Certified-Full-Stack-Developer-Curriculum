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
