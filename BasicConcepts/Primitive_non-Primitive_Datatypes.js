// Primitive datatypes :
// NN BB SS U
// Number Null String Symbol Undefined

let a = null
let b = 123
let c = BigInt(23456)
let d = false
let e = "Suyog Kulkarni"
let f = Symbol('I am a symbol ')
let g = undefined

console.log(a, b, c, d, e, f, g)


// Non-primitive datatypes 
const marks = {
    "Suyog": 100,
    "Arundhati ": 90,
    "Saloni ": 97
}
console.log(marks["Suyog"])