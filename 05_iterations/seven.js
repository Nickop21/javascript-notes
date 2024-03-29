const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10}) //map make new array of original array and for each use original array

const newNums = myNumers
                // .map((num) => num * 10 ) next line em value num ki *10 jayegi
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

console.log(newNums);