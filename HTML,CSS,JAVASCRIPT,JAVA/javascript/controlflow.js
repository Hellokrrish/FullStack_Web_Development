let num = Math.random();

if (num > 0.5) {
  console.log("Heads");
} else {
  console.log("Tails");
}


// IF-statement example:

const hour =11;
if (hour<12){
  console.log("Good morning");
}

// IF-ELSE example:

if (grade > 60) {
  console.log("You passed.");
} else {
  console.log("You failed.");
}

// IF-ELSE IF-ELSE example:

let grade = 93;

if (grade > 90) {
  console.log("A");
} else if (grade > 80) {
  console.log("B");
} else if (grade > 70) {
  console.log("C");
} else if (grade > 60) {
  console.log("D");
} else {
  console.log("F");
}

// In chemistry, pH is a scale used to specify the acidity or basicity of a fluid.

Create a ph-levels.js program that checks whether a pH level is basic, acidic, or neutral.

// Write code below 💖

let ph =7;
if(ph>7){
  console.log("basic");
}
else if (ph<7){
  console.log("acidic");
}
else{
  console.log("neutral");
}

//In JavaScript, the Math.random() method returns a random decimal number between 0 and 1.
console.log(Math.random());

//To get a random integer between 0 to 9:

Math.floor(Math.random() * 10);

const question = "Put question string here";

const randomNumber = Math.floor(Math.random() * 9) + 1;

let answer = "";

if (randomNumber === 1){
  answer = 'Yes - definitely';
} else if (randomNumber === 2) {
  answer = 'It is decidedly so';
} else if (randomNumber === 3) {
  answer = 'Without a doubt';
} else if (randomNumber === 4) {
  answer = 'Reply hazy, try again';
} else if (randomNumber === 5) {
  answer = 'Ask again later';
} else if (randomNumber === 6) {
  answer = 'Better not tell you now';
} else if (randomNumber === 7) {
  answer = 'My sources say no';
} else if (randomNumber === 8) {
  answer = 'Outlook not so good';
} else if (randomNumber === 9) {
  answer = 'Very doubtful';
} else {
  answer = 'Error';
}

console.log("Question: ", question);
console.log("Answer:   ", answer);