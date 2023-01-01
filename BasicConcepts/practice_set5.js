// // Taking entries to the array from user
// let size = Number.parseInt(prompt("Enter the size of arryay"))
// let arr = []
// for (let i = 0; i < size; i++) {
//     let val = Number.parseInt(prompt("Enter value for index No :", i))
//     arr[i] = val
// }
// console.log(arr)

// Keep taking value till 0 is added
// let valarr = []
// let val;
// do {
//     val = Number.parseInt(prompt("Enter a value"))
//     valarr.push(val)
// }
// while (val != 0)

// Filter the array on the basis of divisible by 10
// let arr = [10, 12, 20, 22, 30, 40, 50, 55, 66, 60]
// let ex = arr.filter((x) => x % 10 == 0)
// console.log(ex)

// Creating array of square of all elements of given array
// let arr = [1, 2, 3, 4, 5, 6]
// let sq = arr.map((x) =>
//     x * x
// )
// console.log(sq)

// Reducing a array of natural numbers to form its multiplication
// let arr = [1, 2, 3, 4, 5]
// console.log(arr.reduce((x, y) => x * y))

// let val = Math.random * 100
// val = Math.floor(val)
// let guess = 0
// let score = 0
// let attempt = 0
// do {
//     guess = prompt("Enter a number to guess");
//     if (val == guess) {
//         score = 100 - attempt;
//     }
//     else if (val < guess) {
//         console.log("Value is Smaller than your guess");

//     }
//     else {
//         console.log("Value is greater than your guess")
//     }
// }
// while (val != guess)
// console.log(score);