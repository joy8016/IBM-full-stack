// let obj = {
//     name: "joydeb maity",
//     class: "n tech",
//     muFunction:function(){
//         console.log(this);
//         console.log("a im a method inside object")
        
//     },
//     subjects:["DBMS", "AI", "CT"],
//     newobj:{
//         1:80,
//         nestedFunction:function(){
//             console.log(this)

//             console.log("i am nested method of object")
//         },
//         nestedNewObj:{
//             myMethod:function(){
//                 console.log("another nested function")

//             }
//         }

//     }
// }

// obj.muFunction();
// obj.newobj.nestedFunction();

//conditions

// let a = 10, b = 20;
// if(a>b){
//     console.log(`${a} is less than ${b}`);
// }
// else if(a==b){
//     console.log(`${a} is equal to ${b}`);
// }
// else{
//     console.log(`${a} is not less than ${b}`)
// }


// let a = 15;
// if(a%3==0 && a%5!==0){
//     console.log("fizz");

// }
// else if(a%5==0 && a%3!==0){
//     console.log("buzz");
// }

// else{
//     console.log("fizz buzz");
// }

//for loop

// let num = 10;

// for(let i=0; i<10; i=i+2){
//     console.log(i);
// }

// let arr = [1, 2, 3, 4 ,5, 6, 7];
// for(let i=0; i<arr.length; i++){
//     console.log(arr[i]);
// }

// let str = "joydeb";
// for(let i=0; i<str.length; i++){
//     console.log("a"+str[i]+"b");
// }

//for of loop

// let arr = ["joydeb"];
// for(let num of arr){
//     console.log(num);
// }

//while loop
let num = 5;

while(num<5){
    //logic

    console.log(num);
    num++;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for(let i=0; i<arr.length; i++){
    if(arr[i]%2!==0){
        console.log("odd", arr[i]);
    }
    else{
        console.log("even", arr[i])
    }
}