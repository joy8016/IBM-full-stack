//1: what will be the output of the following code? explain why.

// let x = "5"
// let y = 5
// console.log(x==y)

//output is "true"

//explain:"==" This operator performs type coercion, meaning it converts the operands to the same type before making the comparison.
// console.log(x===y)

//output is "false"
//explain: "===" This operator does not perform type coercion. It checks for both value and type equality.



//question no 2: How can you find the length of the longest word in this array? 


// const words = ["JavaScript", "Programming", "Function", "Hoisting"];

// function getLongestWordLength(words) {
//   let longestWordLength = 0;

//   for (let word of words) {
//     if (word.length > longestWordLength) {
//       longestWordLength = word.length;
//     }
//   }

//   return longestWordLength;
// }

// console.log(getLongestWordLength(words)); 

//output is the : the longest word is the "programming" and the length is 11.


//question no 3: What will be logged in the console? Explain your answer.

// function testSope(){
//     if(true){
//         var a = 10;
//         let b = 20;
//         const c = 30;

//     }
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// testSope();

//output is: 10 
//reference error: b is not declare
//reference error: c is not declare

//explain: var keyword(Variables declared with var have function scope. This means that they are accessible anywhere within the function they are declared in, even if they are declared inside a block (such as an if statement).)
//let and const keyword(Variables declared with let and const have block scope. This means they are only accessible within the block they are declared in (a block is defined by {} braces, such as in an if statement. In your function testScope, let b and const c are declared inside the if block. Because they have block scope, they are not accessible outside the if block.)


//question no 4: Rewrite the following function using const and fix any issues

//use const 

// const name = "joy";
// function greet(){
//     if(true){
//         const message = "hello" + name;
//     }

//     console.log(message);
// }
// greet();

//after any fix issues

// const name = "joy";
// function greet(){
//     if(true){
//         const message = "hello" +" " +name;
//         console.log(message);
//     }

    
// }
// greet();



//question no 5: Convert this traditional function into an arrow function without changing the output. 

const multiplyy = (a,b)=>{
    return a* b;
}
    


console.log(multiplyy(4,4))


//question no 6:What will be the output? Explain why.

const obj = {
    name: "alice",
    sayhello: function(){
        setTimeout(()=>{
            console.log("hello," + this.name);
        }
        ,1

    );
    
    }
};

obj.sayhello();

//output is: hello,alice
//explain: When obj.sayHello() is called, the setTimeout schedules the arrow function to run after 1 second. When it runs, it logs "Hello, " + this.name to the console. Given this.name is "Alice", the output is "Hello, Alice".


//question no 7: What will be the output of this code? Explain why.

// console.log(a);
// var a = 10;
// console.log(b);
// let b = 20;

//output is: reference error(can't access 'b' before initialization)

//explain: because firstly dispaly 'b' answer before initialization



//question no 8: Rearrange the following function so it works correctly, explaining the problem.

function square(n) {
    return n * n;
}

var double = function(n) {
    return n * 2;
};

console.log(square(5));
console.log(double(4));



// Section 5: 
// Operators (Arithmetic, Assignment, Comparison, Logical)
// 9 What will be the output of the following expressions?
console.log(5 + "5"); //output : 55
console.log(5 - "3"); //output : 2
console.log(5 * "2"); //output : 55
console.log("10" / 2); //output :5
console.log(10 % "3");  //output :1
// + with a string → Concatenation
// Math operators (-, *, /, %) → Convert strings to numbers automatically





// 10 Rewrite this code using shorthand assignment operators.
let x = 10;
x += 5;  // Equivalent to: x = x + 5;
x *= 2;  // Equivalent to: x = x * 2;
x -= 3;  // Equivalent to: x = x - 3;
x /= 2;  // Equivalent to: x = x / 2;





// 11 What will be logged in the console? Explain why.
console.log(5 > 3 && 10 < 20); // if both conditions are true then it return  true
console.log(5 > 3 || 10 > 20); // if at least one condition is true then it return true
console.log(!(5 > 3));  // negates the truth value.





//  Section 6: Function Parameters vs Arguments
// 12.  What will be the output of the following function?
function sum(a, b, c = 5) {
    return a + b + c;
}
console.log(sum(2, 3));  // output : 10
console.log(sum(2, 3, 10)); // output : 15







// 13. Write a function that takes any number of arguments and returns their sum
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

// Example usage:
console.log(sum(1, 2, 3));       // Output: 6
console.log(sum(10, 20, 30, 40)); // Output: 100
console.log(sum());              // Output: 0





//14 Fix the following function to work correctly and explain the issues.
function outer() {
    let count = 0;
    return function inner() {
        count++;
        console.log(count);
    };
}
const counter1 = outer();
counter1();
counter1();
const counter2 = outer();
counter2();
counter2();
//No Issues Found






// ##Some statement questions:

// 1. Number Reversal without Using Built-in Methods
//  Problem:
// Write a function reverseNumber(num) that takes a number and returns its reverse.
// Example:
// reverseNumber(1234); // Output: 4321
// reverseNumber(-567); // Output: -765
//  Hint: Convert the number to a string manually and reverse it

function reverseNumber(num) {
    let rev = 0;
    let negative = num < 0;
    num = Math.abs(num);

    while (num > 0) {
        rev = rev * 10 + (num % 10);
        num = Math.floor(num / 10);
    }

    return negative ? -rev : rev;
}

// Example usage:
console.log(reverseNumber(1234));  // 4321
console.log(reverseNumber(-567));  // -765








// 2. Custom Length Function
// Problem:
// Create a function customLength(str) that returns the length of a string without using length
// property.
// Example:
// customLength("JavaScript"); // Output: 10
function customLength(str) {
    let count = 0;
    for (let char of str) {
        count++; // Increase count for each character
    }
    return count;
}
console.log(customLength("JavaScript")); // Output: 10




// 3. Avoid Hoisting Bug
//  Problem:
// Fix the bug in the following code without changing the function calls.
console.log(add(2, 3)); // Should output: 5
function add(a, b) {
    return a + b;
}
var multiply = function (a, b) {
    return a * b;
};
console.log(multiply(2, 3));
// Should output: 6





// 4 Function That Returns Another Function
//  Problem:
// Write a function counter() that returns another function. Each time the returned function is called, it
// should increase a count and return it.
//  Hint: Use closures
// Example:
// const count = counter();
// console.log(count()); // Output: 1
// console.log(count()); // Output: 2
// console.log(count()); // Output: 3





function counter() {
    let count = 0;  // Private variable

    return function () {
        count++;  // Increment count
        return count;
    };
}
// Example usage:
const count = counter();
console.log(count()); // Output: 1
console.log(count()); // Output: 2
console.log(count()); // Output: 3