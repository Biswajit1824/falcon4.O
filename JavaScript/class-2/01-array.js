// Array :

// An array in js is a data structure to store multiple values of any type under a single name, including number, string, array and objects.
// An array is a collection of items stored at a contiguous memory location.
// An array is a zero-indexed meaning it starts from index 0.

//Create an array

//earlier
let num1 = 109;
let num2 = 107;
let num3 = 100;

//Now

let myArray = [num1, num2, num3]
console.log(myArray);

let mixedArray = ["Biswajit", "Silan",24,54];
console.log(mixedArray);

// Accessing elements :

console.log(mixedArray.length); 
console.log(mixedArray[1]);

// in optimized way

// Print me the last value of randomArray
console.log(mixedArray[3]);
console.log(mixedArray[mixedArray.length - 1]);

//Modifying the element :
mixedArray[2] = 19;
console.log(mixedArray);

//Array methods :

//Push method :
// The push() method adds one or more elements to the end of an array and returns the new length of the array.

let bikes = ["Pulsar", "Ninja", "KTM", "Harley", "Triumph"];
console.log(bikes);
console.log(bikes.length);

bikes.push("hero");
console.log(bikes);
console.log(bikes.length);

// Pop method

console.log(bikes.pop());
console.log(bikes.pop());
console.log(bikes);

