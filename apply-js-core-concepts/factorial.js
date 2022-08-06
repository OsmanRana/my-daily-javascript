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
