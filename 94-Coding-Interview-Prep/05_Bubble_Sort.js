function bubbleSort(array) {
    // Only change code below this line
    //iterate through the array
    for(let i=0;i<array.length-1;i++){
        let swapped = false
        //after first iteration the last element will be sorted
        //so we don't have to till the last in the next 
        for(let j=0;j<array.length-1-i;j++){
            //compare two adjacent members
            //we need to keep iterating the inner comparison
            //so we need the outer loop - 0(n2)  
            if(array[j]>array[j+1]){
                let temp = array[j]
                array[j] = array[j+1]
                array[j+1] = temp
                swapped = true
            }
        }
        //if no swap has occured it means it is sorted,
        //so we can jump off
        //to optimise the code
        if(!swapped){
            break
        }    
    }
    return array;
    // Only change code above this line
  }

  console.log(bubbleSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]))