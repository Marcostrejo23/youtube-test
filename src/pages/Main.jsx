import React from 'react'

const Main = () => {
  return (
    <div>
    
    // // import React from "react";
// import { useState } from "react";

// function useState = () {};

var object = {
  firstValue: "a",
  secondValue: "b"
};

var firstValue = object.firstValue;
console.log("firstValue 1", firstValue);
// "a"

var { firstValue } = object;
console.log("firstValue 2", firstValue);
// "a"

var { firstvalue } = object;

// state is state, updateState funxction that updates state and we're using useState with a default value of value to keep track of state
// var [state, updateState] = useState(false);



var arrayTest = [1, 2, 3, 4];

// create a variable with the value of the first index;

var arrayTestVar = arrayTest[0];

const [a, b, c] = arrayTest;

console.log("c", c);

    
    </div>
  )
}

export default Main


// constructor function 

// creates new user object based on the class 

class User {
  constructor(){
    this.email = email; 
    this.name = name;

  }
}

var userOne = new User()

//the 'new' keyword 
//creates a new empty object{}
//sets the value of 'this' to be the new empty object 
// - calls the constructor method