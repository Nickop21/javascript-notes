//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

// 
const score = 100
const scoreValue = 100.3  /// type number

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

// //////////////////////////

// statck(primitive) ,Heap(non-premitive)
// stack - copy of original val  , Heap - reference of original val

// eg

let myname="nitin"
let anothername=myname
anothername="yadav"

// not chnage in original value
let user1={
    email:"ny@gmail.com",
    name:"name"
}
let user2=user1

// in thyis we get refernce of original user 1 if any chnage in user2 refelect in user1

user2.name="yadav"