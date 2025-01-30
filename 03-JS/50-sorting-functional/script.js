const generateBtn = document.getElementById("generate-btn");
const startingArray = document.getElementById("starting-array");
const sortBtn = document.getElementById("sort-btn");
const arrayContainer = document.getElementById("array-container");

const generateElement = () => {
  return Math.floor(Math.random() * 100) + 1;
};

const generateArray = () => {
  const arr = [];
  for (let index = 0; index < 5; index++) {
    arr.push(generateElement());
  }
  return arr;
};

const generateContainer = () => {
  return document.createElement("div");
};

const fillArrContainer = (element, arr) => {
  arr.forEach((number) => {
    const newSpan = document.createElement("span");
    newSpan.textContent = number;
    element.appendChild(newSpan);
  });
  return element;
};

const isOrdered = (first, second) => (first <= second ? true : false);

const swapElements = (arr = [], index) => {
  //console.log("arr",arr,"index",index)
  const first = arr[index];
  const second = arr[index + 1];
  //console.log("first",first,"second",second)
  if (!isOrdered(first, second)) {
    //if is ordered returns false
    //swap
    arr[index] = second;
    arr[index + 1] = first;
  }
  //console.log("sorted",arr)
  //return arr
};

const highlightCurrentEls = (element, index) => {
  const children = Array.from(element.children);
  children[index].style.border = "1px dashed red";
  children[index + 1].style.border = "1px dashed red";
};

let numbers = [];

generateBtn.addEventListener("click", () => {
  sortBtn.style.display = "block"
  numbers = generateArray();
  if (startingArray.children.length === 0) {
    fillArrContainer(startingArray, numbers);
  } else {
    startingArray.innerHTML = ""
    fillArrContainer(startingArray, numbers);
    const children = Array.from(arrayContainer.children);
    for (let index = 1; index < children.length; index++) {
      const element = children[index];
      //console.log(element);
      arrayContainer.removeChild(element)
    }
  }
});

sortBtn.addEventListener("click", () => {
  sortBtn.style.display = "none"
  let highlightIndex = 0;
  for (let outerIndex = 0; outerIndex < numbers.length - 1; outerIndex++) {
    //bubble sort - if the array passes through the whole set without swapping
    //then it means its already sorted, so we can jump out, no need to go again
    let swapped = false;
    //const element = array[outerIndex];
    for (let index = 0; index < numbers.length - 1; index++) {
      if(!isOrdered(numbers[index],numbers[index+1])){
        swapped = true;
      } 
      highlightCurrentEls(arrayContainer.children[highlightIndex], index);
      highlightIndex++;
      swapElements(numbers, index);
      //console.log("sorted",numbers)
      const newDiv = generateContainer();
      //console.log(fillArrContainer(newDiv, numbers));
      fillArrContainer(newDiv, numbers)
      arrayContainer.appendChild(newDiv);
    }
    if (!swapped) {
      break;
    }
  }
});
