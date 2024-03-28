//var c = 300
let a = 300
if (true) {
    let a = 10 //this is indeprndent of upr wala a
    const b = 20
    // console.log("INNER: ", a); 10
    
}



// console.log(a); 300
// console.log(b);
// console.log(c);


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}

// hoisting
// we cant acces phele in this
//here we store funtion in variable 
addTwo(5)
const addTwo = function(num){
    return num + 2
}
