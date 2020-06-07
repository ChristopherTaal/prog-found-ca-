//Question 1
//Declare and initialise a variable with a string value.
var name = "Christopher";
//Question 2
//Create an object variable called person and give it two properties (a key and a value) of your choice.
var person = {
    gender: " male ",
    color: " white "
};
//Question 3
//Create a variable called outOfStock and assign it a boolean value.
var outOfStock = true;
//Create an if else statement that checks the value of outOfStock.
var outOfStock = true;
//If it is true, console log "Out of stock". Otherwise log "In stock".
if(outOfStock === true) {
    console.log("Out of stock");
}
else {
    console.log("In stock");
}
//Question 4
//Create an array of five numbers.
var numbers = [1, 2, 3, 4, 5];
//Loop through the array and console log each value.
for( var i = 0; i < numbers.length; i++){
    console.log (numbers [i]);
}
//Question 5
//Create a for loop that counts from 15 to 25. Console log the value of the counter variable inside the loop.
for(var count = 15; count <= 25; count++) {
    console.log(count);
}
//Question 6
//Using the same loop from the above question, only log the value of the counter variable if it is equal to 20.
for(var count = 15; count <= 25; count++) {
if (count === 20)
console.log(count);
else console.log();
}
//Question 7
//Create an array of two objects. Each object must have the same three properties (with different values):
var object = [
//firstobject
    {
    name: "apple",
    discount: true,
    size: 20
    },
//secondobject
    {
    name: "samsung",
    discount: false,
    size: 19
    }
];
//Loop through the array and console log the number value and the boolean value.
for ( var loop = 0; loop < object.length; loop++){
    console.log (object[loop].discount);
    console.log ( object[loop].size);   
} 
//Question 8
//Create a function called whatIDontLike that accepts one argument. 
function whatIDontLike(dislike){
    console.log("whatIDontLike " + dislike);
}
whatIDontLike("racism");
//Question 9
function subtractTwonumbers(number1, number2) {
    var difference = number1 - number2;
    console.log(difference);
}
subtractTwonumbers(300, 100);
//Question 10
//Create an empty array.
var emptyArray = [];

function communicate(argument){
    emptyArray = argument;
    console.log(emptyArray);
}
communicate("hello");
