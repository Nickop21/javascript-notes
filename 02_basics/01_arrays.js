// array
// javascript array resizable 
// array made shallow copy share reference
const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7) //last me add
// myArr.pop() //last value remove

// myArr.unshift(9)  added in front
// myArr.shift()  like pop but from front
// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join() joint bind aaray and change type to string

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3) //last index not include

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);

//difference b/w slice and splice
// splice include last index to but main diffence is its remove the index element from the original array but not in case of slice
// 