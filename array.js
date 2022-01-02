//create an Array of ints and put the first 10 square numbers into it.
//create an empty array -> let squareInt = [];
//loop through the ints -> for loop;
//multiply each int with the same int

function squreNumber (n){
    let squareInt = [];
    for (let i = 1; i <= n; i++){
        const squredInt = (i*i)
        squareInt.push(squredInt)
    }
    return squareInt;
}

//Given a binary array nums, return the maximum number of consecutive 1's in the array.
//loop through the array
//check the item is 1 or 0
//find a starting point and ending point

const myArr =[1,2,3,4,5];
//inserting items at the end
 myArr.push(7);
//inserting items at the start
myArr.unshift(6);
//removing the last item
myArr.pop()
//removing from the begining
myArr.shift()
//search an item
function searchItem (i) {
    if(myArr.includes(i)){
        return true;
    } else {
        return false;
    }
};
//replacing an item 
myArr[2] = 9 ;
//checking the type
let type = typeof myArr;
let type1 = Array.isArray(myArr)
console.log(type1)