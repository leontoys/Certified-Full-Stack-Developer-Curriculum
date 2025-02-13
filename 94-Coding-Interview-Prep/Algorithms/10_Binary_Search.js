function binarySearch(searchList, value) {
  let arrayPath = [];
  let found = false;

  while (searchList.length > 0) {
    //find the middle value
    const middle = Math.floor((searchList.length-1) / 2);
    arrayPath.push(searchList[middle]);
    //is this equal?
    if (searchList[middle] === value) {
      found = true;
      break;
    } else if (searchList[middle] > value) {
      searchList = searchList.slice(0, middle);
    } else {
      searchList = searchList.slice(middle + 1);
    }
  }

  return found ?  arrayPath : "Value Not Found"
}

const testArray = [
  0, 1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 49, 70,
];

console.log(binarySearch(testArray, 0));
console.log(binarySearch(testArray, 1));
console.log(binarySearch(testArray, 2));
console.log(binarySearch(testArray, 6)); //value not found
console.log(binarySearch(testArray, 11));
console.log(binarySearch(testArray, 13));
console.log(binarySearch(testArray, 70));
