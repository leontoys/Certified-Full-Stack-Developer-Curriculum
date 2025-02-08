/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
/* var findMedianSortedArrays = function (nums1, nums2) {
    let median = null
  //find the length of the first array
  const num1_length = nums1.length;
  //find the length of the second array
  const num2_length = nums2.length;
  //add up the lengths - length_sum
  const sum_length = num1_length + num2_length;
  //if it is even
  if (sum_length % 2 == 0) {
    //divide the number by 2 and plus one and minus one
    let middle_1 = (sum_length/2)
    let middle_2 = (sum_length/2)+1
    //if this number is less than the length of first array
    //then the number is in first array and find it
    const median_1 = middle_1 <= num1_length ? nums1[middle_1-1] : nums2[middle_1 - num1_length-1]
    //if it is greater than the length of the first array
    //then reduce ie, the number - length of first array
    const median_2 = middle_2 <= num1_length ? nums1[middle_2-1] : nums2[middle_2 - num1_length-1]
    //find the number in the second array
    median = (median_1+median_2)/2
  }
  //if it is odd
  else {
    //divide the number+1 by 2
    const middle = (sum_length + 1) / 2;
    //if this number is less than the length of first array
      //then the number is in first array and find it
      //if it is greater than the length of the first array
      //then reduce ie, the number - length of first array
      //find the number in the second array
      median = middle <= num1_length ? median = nums1[middle-1] : nums2[middle-num1_length-1]
    }
  return median
}; */

/* var findMedianSortedArrays = function (nums1, nums2) {
    let sorted = []
    nums1.forEach(element => {
        sorted.push(Number(element))
    });
    nums2.forEach(element => {
        sorted.push(Number(element))
    });
    sorted = sorted.toSorted((a,b)=>a-b)
    if (sorted.length%2==0) {
        const middle_1 = sorted.length / 2
        const middle_2 = middle_1 + 1
        return (sorted[middle_1-1]+sorted[middle_2-1])/2
    }
    else{
        const middle = (sorted.length+1)/2
        return sorted[middle-1]
    }

} */

var findMedianSortedArrays = function (nums1, nums2) {
  //merge array and sort
  const sorted = nums1.concat(nums2).toSorted((a,b)=>a-b)

  return sorted.length%2==0 //is the length even
          ? (sorted[(sorted.length / 2)-1]+sorted[(sorted.length / 2)])/2 //if yes, average of middle values
          : sorted[((sorted.length+1)/2)-1] //else, middle value

}

console.log(findMedianSortedArrays([1,2],[3,4]))
console.log(findMedianSortedArrays([1,3],[2]))
console.log(findMedianSortedArrays([1,2,3,4,5],[6,7,8,9,10,11,12,13,14,15,16,17]))