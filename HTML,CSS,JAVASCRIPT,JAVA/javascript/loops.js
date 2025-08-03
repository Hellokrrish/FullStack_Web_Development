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