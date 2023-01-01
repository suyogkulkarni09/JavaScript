alert("Your site is up and running, Congratulations !!")
let a = Number.parseInt(prompt("Please enter a number : "))
let result = a * a;
let consent = confirm("Do you want to write results to a document ??")
if (consent) {
    document.write("Value of Square of Given Number is : ", result)
}
else {
    document.write("Allow me write to a document")
}
