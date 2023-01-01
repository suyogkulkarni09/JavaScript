
// For loop in JavaScript 
num = 2
for (i = 1; i < 11; i++) {
    let val = num * i;
    console.log(num + " * " + i + val)
}

// For in Loop in java
// Usually used to iterate over the key value paired data types like Object(Dictionary in python )
const obj = {
    "Name : ": "Suyog",
    "Designation : ": "Software Engineer",
    "Organisation Name: ": "Persistent Systems"
}
for (let a in obj) {
    console.log(a + obj[a])
}