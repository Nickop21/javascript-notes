// Immediately Invoked Function Expressions (IIFE)

// global scope se polluted na ho isliye we use
 // jiska naam na ho use anouinmous function bolte he
(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')

