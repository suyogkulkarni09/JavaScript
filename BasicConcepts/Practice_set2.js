/*
Problem No: 1
let age = prompt("Enter your age ")
val = Number.parseInt(age)
if (val <= 12) {
    console.log("You are a child")
}
else if (val > 12) {
    console.log("You are a Teenager")
}
else {
    console.log("You are an Adult, So please Behave !!")
}
*/

// Problem No:2 
let num = Number.parseInt(prompt("Enter a number"))
if (num % 2 == 0 && num % 3 == 0) {
    console.log("Number is divisible by both 2 & 3 ")
}
else if (num % 2 == 0 && num % 3 != 0) {
    console.log("Number is Divisible by 2 only")
}
else if (num % 2 != 0 && num % 3 == 0) {
    console.log("Number is only divisible by 3")
}
else {
    console.log("Number is not divisible by both ")
}