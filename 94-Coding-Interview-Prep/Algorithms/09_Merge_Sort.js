function mergeSort(array) {
    // Only change code below this line
    //console.log("array",array)
    //if array has one element
    //it is sorted so return the array
    if(array.length===1){
        return array
    }

    //otherwise split the array into two halves
    let mid = Math.floor( array.length/2 )
    //left array and right array we can get 
    let left = array.slice(0,mid)
    let right = array.slice(mid)
    //now sort the left and sort the rigth
    left = mergeSort(left)
    right = mergeSort(right)
    //now merge them - which means sort and merge them !!
    return merge(left,right)

    // Only change code above this line
  }

  //now merge -- this is a new function
  const merge = (left,right)=>{
    //create an empty result set array 
    //to which the sorted will be passed
    let result = []

    //if there are elements in left and right
    //loop through them compare and push 
    let i = 0
    let j = 0

    while(i < left.length && j < right.length ){
        //keep comparing
        //push the smaller element to result
        if(left[i] < right[j]){
            result.push(left[i])
            i++
            //j will wait - right
        }
        else{
            result.push(right[j])
            j++
            //i will wait - left
        }
    }

    //now if elements are remaining there in either left or right
    //push them
    if(i < left.length){
        return result.concat(left.slice(i))
    }
    if(j < right.length){
        return result.concat(right.slice(j))
    }
    //otherwise return result
    return result

  }

 console.log(mergeSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92])  )
