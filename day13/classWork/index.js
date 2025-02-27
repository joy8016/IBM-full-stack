//for each loop
//syntex: forEach(()=>{});
//not return use in forEach loop,output undefined


// let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];

// arr.forEach((index, el)=>{
//     console.log(index, el)

// });

//map loop

// let ans = arr.map((el, i)=>{
//     return el;

// });
// console.log(ans)

//filter

// let output = arr.filter((el, i)=>{
//     return el%2==0 &&  el%4==0
// });
// console.log(output);

// let output = arr.filter((el, i)=>{
//     return typeof el =="string"  && el%5==0;
// });
// console.log(output);

// let output = arr.filter((el, i)=>{
//     return typeof el =="string" || el%5==0;
// });
// console.log(output);


//reduce 

// let output = arr.reduce((acc, el)=>{
//     return acc+el
// }, 1)
    
// console.log(output);

// let output = arr.filter((el, i)=>{
//     return el%5==0;

// }).map((el, index)=>{
//     return el*2;

// }).reduce((acc, el)=>{
//     return acc+el;
// })
// console.log(output);   



// let arr = [5,6,9,2,4,3,1,7,5];

// let ans = arr.sort((a,b)=>{return b-a});
// console.log(ans);

let data = [
    {name:"titan", price:1500, desc:"excellent", rating:5},
    {name:"bike", price:200000, desc:"excellent", rating:4},
    {name:"laptop", price:15000, desc:"good", rating:5},
    {name:"titan", price:1500, desc:"nice", rating:3},
]
// console.log(data[0])
// console.log(data[1])

// data.sort((a,b)=>{
//     return a.price-b.price
// });

// console.log(data);

//string sorting

data.sort((a,b)=>{
    if(a.name<b.name){
        return -1;
    }
    else if(a.name>b.name){
        return 1;
    }

})

console.log(data);



