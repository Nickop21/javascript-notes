const user = {
    username: "hitesh",
    price: 999,

    // here this refer to current context i.e user
    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "hitesh"
//     console.log(this.username); //undefined
// }

// chai()

//  const chai = function () {
//     let username = "hitesh"
// console.log(this);
//     console.log(this.username); //undefined
// }

const chai =  () => {
    let username = "hitesh"
    console.log(this);
    console.log(this.username); // undefined
}
// same output for this in console  for both fun

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()

//for arrow function current context is window or node -{}