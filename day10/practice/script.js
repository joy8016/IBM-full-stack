//code on slice methode

let fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
let citrus = fruits.slice(0, 2);

console.log(citrus);

//code on splice methode

let  tata = ["punch", "harier", "nexon", "curve"];
fruits.splice(2, 3, "safari", "nano");

console.log(tata); // Output: ["Banana", "Orange", "Lemon", "Kiwi", "Mango"]
