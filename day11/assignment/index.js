//question no 4: FizzBuzz (If-Else Conditions) 

let n = 15;
for(let i = 1; i<=n; i++){
    if(i%3==0 && i%5!==0){
        console.log("fizz");
    }
    else if(i%3!==0 && i%5==0){
        console.log("buzz");
        
    }
    else if(i%3==0 && i%5==0){
        console.log("fizzBuzz");
    }
    else{
        console.log(i);
    }
}

//question no 5: : Reverse a String Without Using .reverse() 

function reverseString(str) {
    let reversedStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
      reversedStr += str[i];
    }
    return reversedStr;
  }
  
  let myString = "joydeb";
  console.log(reverseString(myString)); // Outputs: !dlrow ,olleH
  


  //question no 6: Remove Duplicates from an Array
  
  function removeDuplicates(array) {
    let uniqueArray = [];
    for (let i = 0; i < array.length; i++) {
      if (uniqueArray.indexOf(array[i]) === -1) {
        uniqueArray.push(array[i]);
      }
    }
    return uniqueArray;
  }
  
  let myArray = [1, 2, 2, 3, 4, 4, 5];
  console.log(removeDuplicates(myArray)); // Outputs: [1, 2, 3, 4, 5]

  
  //question no 7: Find the Longest Word in a Sentence 

  function findLongestWord(sentence) {
    let words = sentence.split(" ");
    let longestWord = "";
  
    for (let i = 0; i < words.length; i++) {
      if (words[i].length > longestWord.length) {
        longestWord = words[i];
      }
    }
  
    return longestWord;
  }
  
  let mySentence = "The quick brown fox jumps over the lazy dog";
  console.log(findLongestWord(mySentence)); // Outputs: jumps

  
//   Problem 8: Custom Array Method (Creating Your Own .map())
// Task:
// JavaScript has a built-in .map() method, but can you create your own version of it? Write a function
// myMap(arr, callback) that takes an array and a callback function and applies the callback to each
// element.
// Example:

function myMap(arr, callback) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i], i, arr));
    }
    return result;
}
function myCallback(x) {
    return x * 2;
}
console.log(myMap([1, 2, 3, 4], myCallback));












// Problem 9: Find the First Non-Repeating Character in a String
// Task:
// Write a function firstUniqueCharacter(str) that returns the first non-repeating character in a given
// string.
// Example:
// console.log(firstUniqueCharacter("aabbcddce")); 

function firstUniqueCharacter(str) {
    for (let i = 0; i < str.length; i++) {
        if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
            return str[i];
        }
    }
    return null;
}

console.log(firstUniqueCharacter("aabbcddce "));











// Problem 10: Nested Loop Challenge – Find Pairs that Sum to a Target
// Task:
// Write a function findPairs(arr, target) that finds all pairs of numbers in an array that sum to a given
// target.
// Example:
// console.log(findPairs([2, 4, 3, 5, 7, 8, 9], 10));
// Output:
// [ [3, 7], [2, 8], [5, 5] ]

function findPairs(arr, target) {
    let pairs = [];
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] === target) {
          pairs.push([arr[i], arr[j]]);
        }
      }
    }
    return pairs;
  }
  
  // Example usage
  console.log(findPairs([2, 4, 3, 5, 7, 8, 9], 10)); 
  // Output: [ [2, 8], [3, 7], [1, 9] ]
  






//   Problem 8: Custom Array Method (Creating Your Own .map())
// Task:
// JavaScript has a built-in .map() method, but can you create your own version of it? Write a function
// myMap(arr, callback) that takes an array and a callback function and applies the callback to each
// element.
// Example:

function myMap(arr, callback) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i], i, arr));
    }
    return result;
}
function myCallback(x) {
    return x * 2;
}
console.log(myMap([1, 2, 3, 4], myCallback));












// Problem 9: Find the First Non-Repeating Character in a String
// Task:
// Write a function firstUniqueCharacter(str) that returns the first non-repeating character in a given
// string.
// Example:
// console.log(firstUniqueCharacter("aabbcddce")); 

function firstUniqueCharacter(str) {
    for (let i = 0; i < str.length; i++) {
        if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
            return str[i];
        }
    }
    return null;
}

console.log(firstUniqueCharacter("aabbcddce "));











// Problem 10: Nested Loop Challenge – Find Pairs that Sum to a Target
// Task:
// Write a function findPairs(arr, target) that finds all pairs of numbers in an array that sum to a given
// target.
// Example:
// console.log(findPairs([2, 4, 3, 5, 7, 8, 9], 10));
// Output:
// [ [3, 7], [2, 8], [5, 5] ]

function findPairs(arr, target) {
    let pairs = [];
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] === target) {
          pairs.push([arr[i], arr[j]]);
        }
      }
    }
    return pairs;
  }
  
  // Example usage
  console.log(findPairs([2, 4, 3, 5, 7, 8, 9], 10)); 
  // Output: [ [2, 8], [3, 7], [1, 9] ]
  






//   Problem 8: Custom Array Method (Creating Your Own .map())
// Task:
// JavaScript has a built-in .map() method, but can you create your own version of it? Write a function
// myMap(arr, callback) that takes an array and a callback function and applies the callback to each
// element.
// Example:

function myMap(arr, callback) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i], i, arr));
    }
    return result;
}
function myCallback(x) {
    return x * 2;
}
console.log(myMap([1, 2, 3, 4], myCallback));












// Problem 9: Find the First Non-Repeating Character in a String
// Task:
// Write a function firstUniqueCharacter(str) that returns the first non-repeating character in a given
// string.
// Example:
// console.log(firstUniqueCharacter("aabbcddce")); 

function firstUniqueCharacter(str) {
    for (let i = 0; i < str.length; i++) {
        if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
            return str[i];
        }
    }
    return null;
}

console.log(firstUniqueCharacter("aabbcddce "));











// Problem 10: Nested Loop Challenge – Find Pairs that Sum to a Target
// Task:
// Write a function findPairs(arr, target) that finds all pairs of numbers in an array that sum to a given
// target.
// Example:
// console.log(findPairs([2, 4, 3, 5, 7, 8, 9], 10));
// Output:
// [ [3, 7], [2, 8], [5, 5] ]

function findPairs(arr, target) {
    let pairs = [];
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] === target) {
          pairs.push([arr[i], arr[j]]);
        }
      }
    }
    return pairs;
  }
  
  // Example usage
  console.log(findPairs([2, 4, 3, 5, 7, 8, 9], 10)); 
  // Output: [ [2, 8], [3, 7], [1, 9] ]