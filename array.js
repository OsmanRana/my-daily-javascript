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
console.log(squreNumber(10))