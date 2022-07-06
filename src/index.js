import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

var numbers = [3, 56, 2, 48, 5];

// const newNumbers = numbers.map(x => x * x)
// console.log(newNumbers);

//Map -Create a new array by doing something with each item in an array.
const mappedNumbers = numbers.map(x => x * 2);
console.log(mappedNumbers);

//////Filter - Create a new array by keeping the items that return true.
const filteredNumbers = numbers.filter(num => num < 10);
console.log(filteredNumbers);

//Reduce - Accumulate a value by doing something to each item in an array.
var reducedNumbers = numbers.reduce((accumulator, currentNumber) => {
    return accumulator + currentNumber;
});
console.log(reducedNumbers);

//Find - find the first item that matches from an array.
const foundNumber = numbers.find(num => num > 10);
console.log(foundNumber);

////FindIndex - find the index of the first item that matches.
const foundIndexNumber = numbers.findIndex(num => num > 10);
console.log(foundIndexNumber);
