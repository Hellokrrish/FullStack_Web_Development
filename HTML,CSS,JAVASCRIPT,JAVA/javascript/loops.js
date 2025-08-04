// WHILE LOOP :

/*Let's use a while loop to see what your lucky number could be!
In a lucky-number.js file, define a luckyNumber and set it to your favorite number. Next, create a guess variable that is between 1 and 10, using the Math.floor() and Math.random() methods:*/


let luckynumber =2;
let guess = Math.floor(Math.random()*10)+1;
while(guess!==luckynumber){
  console.log(`Nope it isnt${guess}`);
  guess = Math.floor(Math.random() * 10) + 1;
}
console.log(`my lucky number is ${luckynumber}`);



// FOR LOOP:

/*Suppose you got detention and the professor asks you to write a phrase 100 times.

Let's create a program that uses for loops to make short work of this!

Use the for loop to log the following message to the Console 100 times: */


// Write code below 💖

for(let i=0;i<100;i++){
  console.log("I Must Not Tell Lies");
}

/*Let's try out the continue and break keywords using even and odd numbers!

Write an even-odds.js file that begins with a for loop that iterates from 1 to 50.

If the iterator variable i is odd, use the continue keyword to skip this iteration. Otherwise, log the number to the Console.

If the iterator variable is equal to 42, log 42 to the Console and use the break keyword to exit the loop. */


// Write code below 💖

for (let i = 1; i <= 50; i++) {
  if (i % 2 === 1) {
    continue;
  } else if (i === 42) {
    console.log(i);
    break;
  } else {
    console.log(i);
  }
}





// Write code below 💖

const myNumber = 30;
let binary = "";

// With for loop
for (let i = myNumber; i >= 1 ; i = Math.floor(i/2)) {
  if (i % 2 == 0) {
    binary = "0" + binary;
  } else {
    binary = "1" + binary;
  }
}
console.log('With for loop: ' + binary);

// With while loop
let i = myNumber;
binary = "";
while (i >= 1) {
  if (i % 2 == 0) {
    binary = "0" + binary;
  } else {
    binary = "1" + binary;
  }

  i = Math.floor(i/2);
}

console.log('With while loop: ' + binary);