// 1. Ways to print in Javascript...
// console.log("Hello World");
// alert("me");
// documents.write("this is document write");

// 2.  Javascript console API...
// console.log("Hello World", 4 + 6, "Another log");
// console.warn("this is warning");
// console.error("this is error");

// 3.  Javascript Variables...
// What are variables? - Containers to store data values
var number1 = 34;
var number2 = 56;
// console.log(number1 + number2);

// 4 . Data types in Javascript...

// Numbers 
var num1 = 455;
var num2 = 56.76;

// String 
var str1 = "This is a string";
var str2 = 'This is also a string';

// Objects
var marks = {
    Ali: 34,
    Faizan: 78,
    Waleed: 99.977
}
// console.log(marks);
// Booleans
var a = true;
var b = false;
// console.log(a, b);

// var und = undefined;
// console.log(undefined);

var n = null;
// console.log(n);

// At a very high level, there are two types of Data Types in Javascript...
// 1. Premitive data types : undefined , null , number , string , boolean , symbol
// 2. Reference data types : Arrays and Objects

var arr = [1, 2, "Waleed", 4, 5]
// console.log(arr)

// Operators in Javascript
// Arithmetic Operators
var a = 100;
var b = 10;
// console.log("The value of a + b is ", a + b);
// console.log("The value of a - b is ", a - b);
// console.log("The value of a * b is ", a * b);
// console.log("The value of a / b is ", a / b);

// Assignment Operators

var c = b;
// c += 2;
// c -= 2;
// c *= 2;
// c /= 2;
// console.log(c);

// Comparison Operators

var x = 34;
var y = 56;
// console.log(x==y);
// console.log(x>=y);
// console.log(x<=y);
// console.log(x>y);
// console.log(x<y);

// Logical Operators

// Logical AND Operator

// console.log(true && true)
// console.log(true && false)
// console.log(false && false)
// console.log(false && true)

// Logical OR Operator

// console.log(true || true)
// console.log(true || false)
// console.log(false || false)
// console.log(false || true)

// Logical NOT Operator

// console.log(!false);
// console.log(!true);

// Functions in JavaScript

function avg(a, b) {
    return (a + b) / 2;
}
// DRY = Do not repeat yourself
c1 = avg(4, 6);
c2 = avg(14, 16);
// console.log(c1 , c2);

// Conditionals in JavaScript

// var age = 41;

// Single if statement
// if (age > 8) {
//     console.log('You cannot drink Cola');
// }

// if-else Statement

// if (age > 8) {
//     console.log('You are not a kid');
// }
// else {
//     console.log('You are a kid');
// }

// if-else Ladder
// age = 21;
// if (age > 32) {
//     console.log('You are not a kid');
// }
// else if (age > 26) {
//     console.log("Bachhe nahi rahe");

// }
// else if (age > 22) {
//     console.log("Yes Bachhe nahi rahe");

// }
// else if (age > 18) {
//     console.log("18 Bachhe nahi rahe");

// }
// else {
//     console.log("Bachhe Rahe");
// }
// console.log("End of Ladder");

var arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr);
// for (var i = 0; i < arr.length; i++){
//     if(i==2){
//         // break;
//         continue;
//     }
//     console.log(arr[i])


// arr.forEach(function (element) {
//     console.log(element)
// })

// const ac = 0;
// ac++;
// ac = ac + 1;
// let j = 0;
// while(j<arr.length){
//     console.log(arr[j]);
//     j++;
// }

// do{
//     console.log(arr[j]);
//     j++;
// }while (j < arr.length);

let myArr = ["Fan", "Camera", 34, null, true];

// Arrays Methods
// console.log(myArr.length) 
// myArr.pop();
// myArr.push("Waleed");
// myArr.shift()
// const newlen = myArr.unshift("Waleed");
// console.log(newlen);
// console.log(myArr);

// String Methods in JavaScript
let myLovelyString = "Waleed is a Good Boy";
// console.log(myLovelyString.length)
// console.log(myLovelyString.lastIndexOf("Good"))
// console.log(myLovelyString.slice(0,4))
d = myLovelyString.replace("Waleed", "Faizan")
d = d.replace("good", "bad");
// console.log(d , myLovelyString)

let myDate = new Date();
// console.log(myDate);     
// console.log(myDate.getTime());
// console.log(myDate.getFullYear());
// console.log(myDate.getDay());
// console.log(myDate.getMinutes());
// console.log(myDate.getHours());

// DOM Manipulation
let elem = document.getElementById('click');
// console.log(elem);

let elemClass = document.getElementsByClassName("container");
// console.log(elemClass);  

// console.log("-----------------------------------")
// console.log(elem)

// elemClass[0].style.background = "yellow";
elemClass[0].classList.add("bg-primary");
elemClass[0].classList.add("text-success");
// console.log("00000000000000000000000000000000000")
// console.log(elem.innerHTML)
// console.log("00000000000000000000000000000000000")
// console.log(elem.innerText)

// console.log(elemClass[0].innerHTML)
// console.log(elemClass[0].innerText)

// tn = document.getElementsByTagName('button');
// tn = document.getElementsByTagName('div');
// console.log("I am in -------------- element", tn[0]);



// createdElement = document.createElement('p');
// createdElement.innerText = "This is a created para";
// tn[0].appendChild(createdElement);
// tn[0].appendChild(createdElement);
// createdElement2 = document.createElement('b');
// createdElement2.innerText = "This is a created bold";
// tn[0].replacechild(createdElement2, createdElement);

// removechild(element); --> removes an element 

// Selecting using Query 
// sel = document.querySelector('.container')
// console.log(sel);
// sel = document.querySelectorAll('.container')
// console.log(sel);

// function clicked() {
//     console.log('The button was clicked')
// }
// window.onload = function () {
//     console.log('The document was loaded ')
// }

// Events in JavaScript
firstContainer = document.getElementById("firstcontainer")
// firstContainer.addEventListener('click', function () {
//     document.querySelectorAll('.container')[1].innerHTML = " <b>We have clicked </b>"
//     console.log("click Hua")
// })


// firstContainer.addEventListener('mouseover', function () {
//     console.log("Mouse on cointainer")
// })

// firstContainer.addEventListener('mouseout', function () {
//     console.log("Mouse out of cointainer");
// })

// // let prevHTML = document.querySelectorAll('.container')[1].innerHTML;
// firstContainer.addEventListener('mouseup', function () {
//     // document.querySelectorAll('.container')[1].innerHTML = prevHTML;
//     console.log("Mouse up when clicked on cointainer");
// })

// firstContainer.addEventListener('mousedown', function(){
//         document.querySelectorAll('.container')[1].innerHTML = " <b>We have clicked </b>"
//     console.log("Mouse down when clicked on cointainer");
// })


// Arrow Functions
// function summ(a,b){
//     return a+b;
// }

summ = (a, b) => {
    return a + b;
}

logkaro = () => {
    document.querySelectorAll('.container')[1].innerHTML = " <b>Set interval fired</b>"
    console.log("I am your log")
}

// setTimeout and setInterval
//  setTimeout(logkaro, 2000);
// use clearInterval(clr)/clearTimeout(clr) to cancel setInterval/setTimeout
// clr = setInterval(logkaro, 2000); 

// JavaScript localStorage
// localStorage.setItem('name' , 'Waleed')
// localStorage
// Storage{name: "Waleed" , length: 1}
// localStorage.getItem('name')
// localStorage.removeItem('name')
// localStorage.clear();

// Key Value Pairs | Json | Dictionary
// let user =  {
//  name: "Waleed",
//  age: 18,
//  phone: "033333333333",
//  familydetail: {
//     mother: {
//         name: "Tasneem",
//         age: 40
//     },
//     father:{
//         name:"Jamil"
//     }
//  }
// }

// console.log(user["age"])
// console.log(user.familydetail.mother)

// JSON
obj = {name: "Waleed" , length: 1 , a: {this: 'tha"t'}}
jso = JSON.stringify(obj);
console.log(typeof jso);
console.log(jso);
console.log(`my name is ${jso}`)
// parsed = JSON.parse({name: "Waleed" , length: 1 , "a": "this":{"tha\"t"}})
// console.log(parsed); 

// Templete Literal - Backticks
a = 34;
console.log()