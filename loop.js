
// var num = 0;
// while(num<7){
//     console.log(num);
//     num++;
// }

/* var num = 1;
while(num<=10){
    console.log(num);
    num = num+2;
} */

/* for(var i = 0; i<10; i++){
    console.log(i)
} */
/* for(var i = 0; i<=10; i = i+2){
    console.log(i)
} */
/* for(var i = 1; i<=10; i = i+2){
    console.log(i)
} */

/* var arr = [12, 45, 76, 32, 59, 36, 58, 55];

for(var i = 0; i < arr.length; i = i+2){
    var num = arr[i];
    console.log(num);
} */

var itemNames = ['mug', 'mouse', 'headphone', 'pen'];
for (i = 0; i < itemNames.length; i++){
    var item = itemNames[i]
    if(item == 'headphone'){
        break;
    }
    console.log(item);
   
}