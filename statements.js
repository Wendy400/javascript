//using if else. if first condition is met second one gets ignored.
let age = 2;

if (age >= 18) {
  console.log("You are eligible to vote.");
} else {
    console.log("You are not eligible to vote")
}



//using else if. note the last part is using else only to complete the last condition.
let score = 87;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}



//using while loop. here the last number is 4 since the condition is true count is less than 5.
// while count is 5 the condition becomes false hence the loop stops.
let count = 0;

while (count < 5) {
  console.log("Count is: " + count);
  count++;
}


//using fo statement. last number is 4, starts 0,1,2,3,4 . once condition is false the loop stops.
for (let i = 0; i < 5; i++) {

  console.log("Iteration: " + i);
}
