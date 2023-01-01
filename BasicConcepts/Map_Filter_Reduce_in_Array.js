// Map : It creates a map i.e array on the basis of some criteria
let arr = [21, 22, 23, 24, 25, 44, 34, 56]
// Let's use map to create a new Array having even only
let even_arr = arr.filter(ele => ele % 2 == 0) // Using Filter function to filter even numbers
    .map(ele => ele * 2) // Using map to create a new array having double of even numbers

console.log(even_arr)

// Reduce : It is used to reduce given array on the basis of some condition
let red_arr = even_arr.reduce((a, b) => a + b)
console.log(red_arr);