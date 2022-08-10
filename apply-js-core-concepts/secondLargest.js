const array = [9000, 32, 523, 5632, 920];

let largestNum = array[0];
let secondLargestNum = 0;

for (let i = 1; i < array.length; i++) {
  if (array[i] > largestNum) {
    secondLargestNum = largestNum;
    largestNum = array[i];
  } else if (array[i] !== largestNum && array[i] > secondLargestNum) {
    secondLargestNum = array[i];
  }
}
// console.log("Largest Number in the array is " + largestNum);
// console.log("Second Largest Number in the array is " + secondLargestNum);

function secondLargestNumber(numberArray) {
  let largestNumber = numberArray[0];
  let secondArray = [];
  let secondLargestNumber = 0;
  for (let i = 0; i < numberArray.length; i++) {
    const index = numberArray[i];
    if (largestNumber < index) {
      largestNumber = index;
    }
  }
  for (let i = 0; i < numberArray.length; i++) {
    const index = numberArray[i];
    if (largestNumber !== index) {
      secondArray.push(index);
    }
  }
  for (let i = 0; i < secondArray.length; i++) {
    const element = secondArray[i];
    if (secondLargestNumber < element) {
      console.log(element);
      secondLargestNumber = element;
    }
  }
  return { largestNumber, secondArray, secondLargestNumber };
}
const secondLargest = secondLargestNumber(array);
console.log(secondLargest);
