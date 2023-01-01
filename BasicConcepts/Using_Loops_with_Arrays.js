let n = [1, 2, 3, 4]
// forEach function in js is used to take every single element out of array

n.forEach(x => {
    console.log(x * x);
})

// Array.from 
let name1 = "Suyog"
// converting to array from String type
let ar_name = Array.from(name1)
console.log(ar_name);

// for of loop  
for (let i of ar_name) {
    console.log(i);
}

// for in 
for (let i in ar_name) {
    console.log(i) // This returns the index of the array since array is also a object

}

