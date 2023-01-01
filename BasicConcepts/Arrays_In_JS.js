// Syntax to Declare
// Note : You can use multiple data types in javascript arrays just like Lists in Python
let arr = [1, 2, 3, 4, 5, 6, "Not Available", null, false]

// Syntax to iterate
console.log(arr.length)   // Finding length of the array
for (let i in arr) {
    console.log(arr[i])
}
console.log(arr[10])

// Functions used in Array :

// toString : This function converts a array to string

let nums = [1, 2, 3, 4, 5]
let b = nums.toString()
console.log(b)
console.log(typeof b)

// join : This will join all array elements using a seperator

let c = nums.join("_") // This will join all the elements with _ As seperator
console.log(c)

// pop : Removes last element of array of the same array and returns the popped element
let poped = nums.pop()
console.log(nums)
console.log(poped)

// Push : inserts new element at the back of the array in the same old array
nums.push(6)
console.log(nums)

// Shift : Removes the first element of the array and return the same element
// Modifies the original array
let shifted = nums.shift()
console.log(shifted)
console.log(nums)


// unshift : This will add the element at the beginning of the array and will return the length of newly created array 
let newar = nums.unshift("Suyog")
console.log(newar)
console.log(nums)


// delete : This will empty or delete the given index will not change size of array
// Just an empty space will be created by deleting the existing element
// This is not a method this is a property so it doesn't return anything
delete nums[0]
console.log(nums)

// concat : This will concate two or more array together to create a new array
let nums_more = [11, 12, 13, 14, 15, 16]
let newArray = nums.concat(nums_more)
console.log(newArray)

// Sort : This will sort the array on the basis of the alphabetical order and not numeric
let n = [2, 7, 6, 1, "Apple"]
console.log(n.sort())

// reverse : It is used to reverse the array it modifies the actual array
n.reverse()
console.log(n)

// Splice : This will slice the arry and will add new element at the place of older 
n.splice(2, 2, "Aru", "Shruti") //First Argument is start from where you want to start slicing 
// Second element is nnumber of elements you want to replace 
// Third is what values u want to put the place of older
// if you don't provide no of elements to remove it will only remove starting index value element with last value to be replaced provided
// This modifies actual array
console.log(n)


// Slice : This will tear the array into from given index will not modify actual array and will return new teared values' array

let removed = n.slice(2, 4) // Last value is exclusive
console.log(removed)
console.log(n)

