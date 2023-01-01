let sampple = "This is my new Setup"
let word = "Setup"
console.log(`The word ${word} ${sampple.includes(word) ? 'is' : 'is not '} available in the sample sentence`)
// Using  ternary operator to test 


let stringset = "SUYOG KULKARNI"
console.log(stringset.toLowerCase())


//Problem No : 2 
// Finding the ASCI of the given index
let str2 = "Thakur"
if (str2.charCodeAt(0) == 84) {
    console.log("True")
}

// Problem no : 3
let str = "This is rs 12300"
let num;
for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) == 32 || str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122 || str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {
        continue
    }
    else {
        num = str.slice(i)
        break
    }
}
console.log(num)

