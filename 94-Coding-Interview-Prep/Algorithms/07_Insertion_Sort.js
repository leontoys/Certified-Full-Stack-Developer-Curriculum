/* Note - this is inefficient as splice is 0(n) operation 
//instead , shift the elements

    function insertionSort(array) {
    // Only change code below this line
    //run the outer loop - this is the unsorted part - current element we have to check
    for(let i=0; i<array.length; i++){
        //inner loop - the sorted part - check current element against this
        for(let j= 0; j<i; j++){
            //is the current element less than 
            //the element from the sorted side
            if(array[i] < array[j]){
                //then we need to insert the element before a[j]
                const current = array[i]
                //cut the element from current position                
                array.splice(i,1)
                //insert the element at the sorted position
                array.splice(j,0,current)
                break
            }
        }
    }
    return array;
    // Only change code above this line
  } */

  function insertionSort(array) {
    // Only change code below this line
    //run the outer loop - this is the unsorted part - current element we have to check
    for(let i= 1; i<array.length; i++){
        //inner loop - the sorted part - check current element against this
        //this loop will keep shifting to the rightside if required
        let current = array[i]
        for(let j= i-1; j>=0 && array[j] > current ; j--){ //till we find an element that is greater than current
            //is the current element less than 
            //the element from the sorted side
            //since keep shifting the elements
            array[j+1] = array[j]
        }
        array[j+1] = current //slot the current element into correct place
    }
    return array;
    // Only change code above this line
  }  

  console.log(insertionSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]))