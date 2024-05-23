// iterationn :

// what are loops :
// structures that are allow repeating a block of code multiple times use to perform repeatative task  efficiently


// types :
// 1. for loop
// 2. while loop 
// 3. do-while loop

// for loop
// syntax

// for (initialization; condition; increment,decrement){
    // codeto be executed
//}

// for(let i = 0;i<5;i++){
//    console.log(i);
// }

// DRY RUN :
// i = 0
// condition : 0 < 5 => true
// console.log(0)
// i++(1)
// i = 1
// condition : 1 < 5 => true
// console.log(1)
// i++(2)
// i = 2
// condition : 2 < 5 => true
// console.log(2)
// i++(3)
// i = 3
// condition : 3 < 5 => true
// console.log(3)
// i++(4)
// i = 4
// condition : 4 < 5 => true
// console.log(4)
// i++(5)
// i = 5
// condition : 5 < 5 => false
// terminate the loop


// while loop :

// while (condition){
//     code
// }
let i = 0;
while (i>5){
    console.log(i);
    i++;
}

// dry run
 
// do  while loop :
