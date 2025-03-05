/**
 * @param {number[][]} nums1
 * @param {number[][]} nums2
 * @return {number[][]}
 */
var mergeArrays = function (nums1, nums2) {
  //loop with index that will be shorter
  //object_num - id : index
  //result_num - array
  //for i = 0 , i < firstarray.length -- , i++
  //if this exists then we need to get the id
  //else add as a new entry to the array
  //object_num[nums1[i][0]] = i
  //result_num = result_num.concat(nums1[i])

  let object_num = {};
  let length = nums1.length > nums2.length ? nums1.length : nums2.length;

  for (let i = 0; i < length; i++) {
    //first check first array's thing is there in object
    //console.log(nums1[i] && nums1[i][0]);
    //console.log(nums2[i] && nums2[i][0]);

    if (nums1[i] && object_num[nums1[i][0]] !== undefined) {
      //it exists
      let array =  object_num[nums1[i][0]]
      //now we have to add
      array[1] = array[1] + nums1[i][1]
      object_num[nums1[i][0]] = array
    } else if (nums1[i]) {
      object_num[nums1[i][0]] = nums1[i];
    }
    if (nums2[i] && object_num[nums2[i][0]] !== undefined) {
      //it exists
      let array =  object_num[nums2[i][0]]
      array[1] = array[1] + nums2[i][1]
      object_num[nums2[i][0]] = array
    } else if (nums2[i]) {
      object_num[nums2[i][0]] = nums2[i];
    }
  }
  return Object.keys(object_num).sort()
};

console.log(
  mergeArrays(
    [
      [1, 2],
      [2, 3],
      [4, 5],
    ],
    [
      [1, 4],
      [3, 2],
      [4, 1],
    ]
  )
);
console.log(
  mergeArrays(
    [
      [2, 4],
      [3, 6],
      [5, 5],
    ],
    [
      [1, 3],
      [4, 3],
    ]
  )
);
