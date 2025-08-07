//->an array is a global object used to store an ordered collection of values. These values, known as elements, are accessed using a numeric index, starting from 0. 
Example: 
const daysOfWeek = [
   "monday",
   "tuesday",
   "wednesday",
   "thursday",
   "friday",
   "saturday",
];
console.log(daysOfWeek);
console.log(daysOfWeek[0]);
console.log(daysOfWeek[1]);
console.log(daysOfWeek[6]);


const primeNumbers=[1,2,3,5,7,11,13,17]
console.log(primeNumbers.length);//-> it will give the size of an array.
console.log(primeNumbers.join(" | "))//;-> it will join the any value that we will assign                                                                          in the string.



const courses = [
  {teacher : "rama" ,course : "html"},
  {teacher : "krishna", course : "css"},
  {teacher : "venkatesh" , course : "javascript"},
 {teacher : "brain" ,course : "react"},
];
courses.push({teacher :"naruto",course : "node"}); //->push() is a built-in method of                                                                                               Array objects used to add one                                                                                              or more elements to the end of                                                                                             an array.  
console.log(courses);
courses[2]={teacher : "holt", course :"databases"}; //-> it will replace the second                                                                                                        index of an array.
const krishna = courses.pop(); //-> it will remove the krishna in the courses.
console.log(krishna);

console.log(courses.shift()); //it will remove the first index in a course.
console.unshift(rama); //it will get the removed index that is "rama".


 // 18. iterating through arrays :
  let country = [
    "india",
    "russia",
    "poland",
    "england",
    "australia",
];
// method-1:
  for(let i =0;i<country.length; i++){
    console.log(i,country[i]);
}

// method -2:
  function logcountry(country){
    console.log(country);
}
countrys.forEach(logcountry);