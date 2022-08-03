// 1.গ্রেড  মেকিং  এর  বাকি  অংশটুকু  করে  ফেলতে  হবে  নিজে  নিজে

// ২. এমন  একটা  প্রোগ্রাম  লিখো   যেখানে  একটা  নম্বর  ইনপুট  করলে  কনসোল এ বলে  দিবে  যে  এইটা  জোর  নাকি  বিজোড়
/* function oddEvenChecker (num){
    if(num % 2 === 0){
        return 'Even';
    }
    else{
        return'Odd';
    }
} 
var number = oddEvenChecker(6);
console.log(number) */

// ৩. একটা  এরে  থাকবে  এরে  এর  মধ্যে  ১-২০ পর্যন্ত  নম্বর গুলা  এলোমেলো   থাকবে  আপনার  কাজ  হবে ক্রোম অনুসারে সাজানো
var numbers = [1, 2, 3, 3, 11, 4, 4, 5, 6, 7, 8, 9, 10];
/* numbers.sort(function(a, b){
    return a-b;
})
console.log(numbers) */
// ৪.এমন  একটা  প্রোগ্রাম  লিখো  যেখানে   নম্বর  ইনপুট  করলে  বলে  এইটা  লিপ ইয়ার  কি  না ?

function leapYear (year){
    if(year % 4 === 0){
        console.log('Leap Year')
    } else{
        console.log('Not a Leap Year')
    }
}
var leapYearCheck = leapYear(2024)

// ৫. ১-৫০ এর  মধ্যে  ৩ এবং ৫ দিয়ে  বিভাজ্য  সংখ্যা  গুলা  বের  করো
/* for(var i = 1; i<=50; i++){
    if(i % 3 === 0 && i % 5 === 0){
        // console.log(i)
    }
} */

var friends = ["rahim", "karimbbbbbbbbbb", "abdul", "sadsd", "heroAlom"];
/* var longWord = friends[0]
for(var i = 0; i < friends.length; i++){
    var friend = friends[i]
    if(longWord.length < friend.length){
        longWord = friend;
    }
}
console.log(longWord) */

// ৬.উপরে এর  এরে  থেকে যেখানে  ৫ টা  ফ্রেন্ড  এর  নাম  এর  মধ্যে   বড়ো  নাম  কোন  ফ্রেন্ড  এর  খুঁজে  বের  করা

var numbers = [1, 2, 3, 3, 11, 4, 4, 5, 6, 7, 8, 9, 10];

// ৭. উবের  পরের  এরে  থেকে  ডুপ্লিকেট  নম্বর  গুলা  বাদ  দিয়ে  উনিক  নম্বর  গুলা বের  করতে    হবে

/* var uniqNumbers = [];
var uniqNumber = numbers[0]
for(var i = 0; i < numbers.length; i++){
    var number = numbers[i]
    if (uniqNumber !== number){
        uniqNumber = number
        uniqNumbers.push(uniqNumber)
    }
}
console.log(uniqNumbers); */

// 8. উপরের  আরে  থেকে  সব  থেকে  বড়ো  নম্বর  কোনটা  বের  করো

/* var bigNumber = numbers[0];
for (var i = 0; i < numbers.length; i++) {
  var number = numbers[i];
  if (bigNumber < number) {
    bigNumber = number;
  }
}
console.log(bigNumber); */
