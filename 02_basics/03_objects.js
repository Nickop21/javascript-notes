// singleton  when constructure se bnega 
// Object.create


// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

//if hm key ko string me defibe kr dia to acces krna ka yk tarika he ["email"]

// console.log(JsUser.email)
// console.log(JsUser["email"]) behind the sece string ki trha track ho rha he
// console.log(JsUser["full name"])
// console.log(JsUser.mySym) yha ye symbole ki trha use nahi ho rha he( type string ) for that square bracket use krana hoga
// console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());