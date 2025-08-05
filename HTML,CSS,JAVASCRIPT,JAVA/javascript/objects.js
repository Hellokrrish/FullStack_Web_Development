/*Objects : an object is a fundamental data type that serves as a collection of key-value pairs. It provides a structured way to store and organize related data and functionalities.*/ 
 example :
 const person={
     name : "rama",
     age : 23,
     city : "vizag",
     state : "ap",
     favouritefood : "potato",
     wantpotato : true,
     numberofpotatowant : 100,
};
console.log(person);
console.log(person.name); --> this a object creation of a above function.
console.log(person["city"]); --> this is a other method to create the function.



const person1 ={
  name= "siva",
  agerange =25-35,
};
const person2={
  name="krishna",
  agerange=65-75,
};
function suggestmusic(person){
  if(person.agerange == 25-35){
    console.log("we think you like drift punk");
  } else if(person.agerange == 65-75){
      console.log("your are obviously going to like johny cach");
  }else {
      console.log("uhh may be try david browny");
 }
};
suggestmusic(person1);
suggestmusic(person2);


const dog={
  name : "luna",
  speak(){
    condole.log("woof woof");
  },
};
dog.speak();



const me ={
  name: {
    first : "rama",
    last : "krishna",
},
  location :{
    pin : 531021;
    city : "vizag",
},
  goaddress(){
    return
   ${this.name.first},${this.name.last},${this.location.pin},${this.location.city};
},
};