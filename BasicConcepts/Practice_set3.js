// Loops and Functions 
// Traversing the Object using for loop
const marks = {
    "Suyog": 100,
    "Shreyas": 90,
    "Suyash": 95
}

for (let i = 0; i < Object.keys(marks).length; i++) {
    console.log("Marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]])

}

// Traversing the Array using For in loop
for (let key in marks) {
    console.log(key + " : " + marks[key])
}