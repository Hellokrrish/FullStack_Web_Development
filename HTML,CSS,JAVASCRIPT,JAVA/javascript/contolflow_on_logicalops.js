//logical-AND:

if (hunger > 4 && anger > 1) {
  console.log("Hangry");
}
//If the hunger variable is greater than 4 and the anger variable is greater than 1, then the program prints "Hangry".


//logical-OR :

if (coffee > 0 || bubble_tea > 0) {
  console.log("😊");
}
//If the coffee variable is greater than 0 or the bubble_tea variable is greater than 0, then the program prints a smiley face.

// logical-NOT :

if (!tired) {
  console.log("Let's code!");
}
// If the tired variable is not true, then the program prints "Let's code!"





/*In summer 2023, the smoke from wildfires in Canada raised concerns about the Air Quality Index (AQI) in one's area.

Create an air-quality-index.js program.

Google the AQI in your area and define an aqi variable with that number.

Write an if/else if/else statement with the following logic:

If aqi is between 0 and 50, print "Good".
Else if aqi is between 51 and 100, print "Moderate".
Else if aqi is between 101 and 150, print "Unhealthy (Sensitive Groups)".
Else if aqi is between 151 and 200, print "Unhealthy".
Else if aqi is between 201 and 300, print "Very Unhealthy".
Else, print "Hazardous". */


const aqi = 45;

if (aqi >= 0 && aqi <= 50) {
  console.log("Good");
} else if (aqi >= 51 && aqi <= 100) {
  console.log("Moderate");
} else if (aqi >= 101 && aqi <= 150) {
  console.log("Unhealthy (Sensitive Groups)");
} else if (aqi >= 151 && aqi <= 200) {
  console.log("Unhealthy");
} else if (aqi >= 201 && aqi <= 300) {
  console.log("Very Unhealthy");
} else {
  console.log("Hazardous");
}



// second method :

const aqi=133;
if(aqi==0 && aqi<=50){
  console.log("Good");
}
else if(aqi>50 && aqi<101){
  console.log("Moderate");
}
else if(aqi>100 && aqi<151){
  console.log("Unhealthy(sensitive groups)");
}
else if(aqi>150 && aqi<201){
  console.log("Unhealthy");
}
else if(aqi>200 && aqi<301){
  console.log("Very Unhealthy");
}
else{
  console.log("Hazardous");
}