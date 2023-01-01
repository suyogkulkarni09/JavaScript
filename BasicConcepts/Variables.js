// Using let kwyword to declare the variable
let a = 10

// Var keyword can also be used to declare the variable
var b = 202
c = a + b
console.log("Addition is  : " + c)


//Understanding var scope 
let val = 100

{
    let val = 200
    console.log("Value of Val : " + val)
}
console.log("Value of val outside of block is : " + val)