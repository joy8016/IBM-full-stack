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

const multiply = (a,b)=>{
    return a* b;
}
    


console.log(multiply(4,4))


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
