function factorial(number) {
  let result = 1;
  for (let i = 1; i <= number; i++) {
    result = result * i;
  }
  return result;
}

const result = factorial(3);
// console.log(result);

function sumOfNumbers(num) {
  let sum = 0;
  for (let i = 0; i <= num; i++) {
    sum = sum + i;
  }
  return sum
}

const total = sumOfNumbers(3)
// console.log(total);

let item = 30;
if(item => 50){
  // console.log("Hello")
}
if(false){}
function namata(num){
  for (let i = 1; i <= 10; i++ ){
    console.log(i*num)
  }
}
namata(13)
//slmallest name

function smallestName(names){
  let smallest = names[0];
  for(let i = 0; i < names.length; i++){
    const index = i;
    const name = names[i];
    if(smallest.length > name.length){
      smallest = name;
    }
  }
  return smallest
}

const friendsName = ['osman', 'rana', 'orko', 'oronno', ]
const smallName = smallestName(friendsName)
console.log(smallName)
