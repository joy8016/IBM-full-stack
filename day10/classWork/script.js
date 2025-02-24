let str = "joy deb"
console.log(str.length)
console.log(str.length-1)

let arr = [1, 2, 3, "joydeb", 1.2, true, false, " "]
console.log(arr)

console.log(arr[6])

arr.push("ram")

console.log(arr)

arr[3]="sam"
console.log(arr)

//homework is difference between slice and splice 

arr.pop()
console.log(arr)

// arr.pop("false")
// console.log(arr)

let obj={

    joy: {classname:"b tech", rn:129, subject:["nm", "dbms", "network"]},
    deb: {classname:"b tech", rn:128, subject:["nm", "dbms", "network"]},
    e: {classname:"b tech", rn:129, subject:["nm", "dbms", "network"]},
    1: undefined



}

console.log(obj.joy)
console.log(obj)

console.log(obj.joy.classname)

obj.joy="name"
console.log(obj)

delete obj.joy

obj.ram = {classname:"b tech", rn:129, subject:["nm", "dbms", "network"]}
console.log(obj)

let name = "joydeb maity"
let Class = "b tech"

let newobj = {
    name, Class
}

console.log(newobj)

let ans = [1,2,3,[4,5,6,[7,8,9]]]

console.log(ans[3][3][0])

let superHeroes = {
    1: {
        name: 'Batman',
        power: ['intelligence', 'money'],
        health: 45,
        villains: [
            { name: 'Redhood', health: 34 },
            { name: 'Twoface', health: 64 }
        ],
        metadata: { favouriteColor: 'red', age: 15 }
    },
    2: {
        name: 'Ironman',
        power: ['jarvis', 'money'],
        health: 33,
        villains: [
            { name: 'Manderin', health: 44 },
            { name: 'Titanium Man', health: 56 }
        ],
        metadata: { favouriteColor: 'red', age: 13}
    }
}

console.log(superHeroes["1"].villains[0]["health"])
console.log(superHeroes["1"].name)
console.log(superHeroes["2"].metadata["age"])



