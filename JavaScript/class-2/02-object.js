// Object :

// A collection of properties, where each property is defined as a key-value pair.
// Each property has a key and a value.
// The value can be a string, number, boolean, array, object, or function.

// Syntax:

// Traditional method

let student = {
  name: "Biswa",
  age: 24,
  city: "Jajpur",
  marks: [80, 90, 70],
  isMarried: false,
  address: { po: "RJP", pin: 755009 },
};
// console.log(student);

let array = ["Biswa", 24, "Jajpur", [80, 90, 70], false];


// Constructor :

let newStudent = new Object();
newStudent.name = "Biswa";
newStudent.age = 24;
newStudent.city = "Jajpur";
newStudent.marks = [80, 90, 70];
newStudent.isMarried = false;
newStudent.address = { po: "RJP", pin: 755009 };

// console.log(newStudent);

// Accessing object :

// myarray[0]
// console.log(newStudent.name); 
// console.log(newStudent["marks"]); 
// console.log(newStudent.city);
// console.log(newStudent.isMarried);
// console.log(newStudent.address);
// console.log(newStudent.age);
// console.log(student.city);

// Modifying object : 

// console.log(newStudent);

newStudent.name = "Sipu";
newStudent.age = 25;
newStudent.city = "Kuakhia";
newStudent.isMarried = true ;
console.log(newStudent);

// delete object : 

delete newStudent.age
console.log(newStudent);
newStudent.age = 25;
console.log(newStudent);

//object keys

let key = object.key(student);
console.log(keys);

// it gives the only keys ["name", "city", "mark", "isMarried", "address"]

// object value :

let valiue = object.value(student)
console.log(value);

//it gives the value

// object entries
