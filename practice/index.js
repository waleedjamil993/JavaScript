/* 
Rule of variable naming!

- Variable names must start with a letter, an underscore (_) or a dollar sign ($).
- Variable names cannot contain spaces.
- Variables cannot be the same as reserved keywords such as if or const.
- By convention, JavaScript variable names are written in camelCase.
- Variables should be given descriptive names that indicate their content and usage (e.g. sellingPrice and costPrice rather than x and y).
- As JavaScript variables do not have set types, it can be useful to include an indication of the type in the name (e.g. orderNumber is obviously a numeric ID, whereas order could be an object, a string or anything else).

headers (preprocessor directories)
*/

function faizan(a,b) {
    return a*b
}


function waleed(a,b) {
    console.log("Value of A : ", a)
    console.log("Value of B : ", b)

    const multiply = faizan(a,b)
    return multiply
}


let abc = "abcd"



console.log(abc)

const abc1 = waleed(1,2)

console.log(abc1)


let a1
// Loops
for(a1 = 1; a1 <=10; a1++) {
console.log("waleed is running... : ", a1)

const mul = waleed(3, 4)
console.log("Multiplication : ", mul)
}


const b1 = "jaflkjaflkj"
if (b1 === "Mul") {
    console.log("Multiplication on the way!")
}
else if(b1 === "Add") {
    console.log("Addition")
}
else {
    console.log("your method is illegal!")
}
waleed()