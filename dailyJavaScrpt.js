//adding two numbers
function sum(n1, n2) {
    return n1 + n2;
}

//substracting two numbers
function sub(n1, n2) {
    return n1 - n2;
}

//multiply two numbers
function multiply(n1, n2) {
    return n1 * n2;
}

//dividing two numbers
function divid(n1, n2) {
    return n1 / n2;
}

//finding the length of an array
function arrayLength(arr) {
    return arr.length
}

//for loop
//total of an array
function arraySum(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i]
    }
    return total;
}

//average of an array
function arrayAverage(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    const average = total / arr.length;
    return average;
}

//multiplication of an array
function arrayMultiply(arr) {
    let total = 1;
    for (let i = 0; i < arr.length; i++) {
        total *= arr[i]
    }
    return total;
}

//array of a given number
function arrayOfNumber(n) {
    let numbers = [];
    for (let i = 0; i < n; i++) {
        numbers.push(i + 1);
    }
    return numbers;
}
//array of even numbers from a number
function evenOddNumberArray(n) {
    let even = [];
    let odd = [];
    for (let i = 0; i < n; i++) {
        if (((i + 1) % 2) === 0) {
            even.push(i + 1)
        } else {
            odd.push(i + 1)
        }
    }
    return [even, odd];
}

//checking odd or even number
function oddEven(n) {
    if (n % 2 === 0) {
        return 'Even Number';
    } else {
        return 'Odd Number';
    }
}

//word count 
function wordCount(string) {
    const count = string.split(" ");
    const wordCount = count.length;
    return wordCount;
}
const myArr = [1, 2, 3, 4];
const myString = "I am Osman";

console.log(wordCount(myString))