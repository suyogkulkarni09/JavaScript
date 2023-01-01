// confirm : Its used to take confirmation from the user for some action
//Returns true or false ok is true cancel is false
let con = confirm("Do you want to continue ??")
if (con) {
    console.log("Render next content")
}
else {
    console.log("Do other action ")
}

// Prompt : It is used to take user input it take input in string format 
let val = prompt("Enter the value ")
let result = val * val;
console.log("Result is : ", result)

// write : its used to write on a webpage
document.write("Duck you !!")

// alert : It is used to give notification to a user
alert("This is getting in right direction !!")