// let age = 14

// 
// let result = age >= 18 ? "Adult" : "Minor"

// console.log(result)

// // ---------------------

// let age1 = 20

// if(age1 >= 18){
//   console.log("Adult")
// }

// // --------------------------

// let age = 15

// if(age >= 18){
//   console.log("Adult")
// }else{
//   console.log("Minor")
// }

// // ----------------------------------

// let marks = 75

// if(marks >= 90){
//   console.log("A")
// }else if(marks >= 70){
//   console.log("B")
// }else{
//   console.log("C")
// }

// // -----------------------------------------------

// let day = 2

// switch(day){
//   case 1:
//     console.log("Monday")
//     break

//   case 2:
//     console.log("Tuesday")
//     break

//   default:
//     console.log("Invalid")
// }

// // -------------------------------------------

// for(let i = 1; i <= 5; i++){
//   console.log(i)
// }


// // ---------------------------------------------

// let i = 1

// while(i <= 5){
//   console.log(i)
//   i++
// }

// // -------------------------------------------------------

// let i = 1

// do{
//   console.log(i)
//   i++
// }while(i <= 5)

//     // ----------------------------------------------------------------

//     // continue and break

    // for(let a =0; a<=10; a++)
    // {
      
    //   if (a==4){
    //     break;
    //   }
    //   console.log(a)
    // }


    // for(let a=0; a<=10; a++){

    //   if(a==4){
    //     continue;
    //   }
    //   console.log(a)
    // }

// // ---------------------------------------------------------------

// // function----

// function totalSum(English, Hindi, Marathi)
// {
//   let sum = English+Hindi+Marathi;
//   return sum;

// }
// let prashiktotal =totalSum(50,80,100);
// console.log("Prashik" + prashiktotal)

// ---------------------------------------------

// Number---------------------------

 //let num = 112;

// console.log(num.toPrecision(4))  //112.0
//console.log(num.toPrecision(3))  //112
//console.log(num.toFixed(3))  // 112.000
//let num = 12.456

//console.log(num.toFixed(2))

// String----------------------

// let str = "prashik";
// console.log(str.length)
// console.log(str.replace("sh", "T"))
// console.log(str.split("s"))
// console.log(str.toLowerCase)
// console.log(str.toUpperCase)
// console.log(str.charAt(5)) index start with 0

// Math-----------------------------------------
// let min =1;
// let max =9;

// let randomNumber = Math.floor(Math.random()*(max-min+1));
// console.log(randomNumber);

// Array--------------------------

// let arr = [2,78,58,8,9,85]
// for(let i=0; i<arr.length; i++)
// {
//   console.log(arr[i])
// }

// Arrays of object-------------------------
// let users = [

//   {
//     name: "Prashik",
//     age: 23
//   },

//   {
//     name: "Rahul",
//     age: 25
//   },

//   {
//     name: "Amit",
//     age: 21
//   }

// ]

// console.log(users[0].name)
// console.log(users[0])


// for(let i = 0; i < users.length; i++){

//   console.log(users[i].name)

// }


// // add new --------------------------
// users.push({
//   name: "Sahil",
//   age: 24
// })


// // for...of Loop------------------------------
// let fruits = ["Apple", "Banana", "Mango"]

// for(let fruit of fruits){
//   console.log(fruit)
// }

// let name = "Prashik"

// for(let char of name){
//   console.log(char)
// }


// // for...in Loop--------------------------------
// let user = {
//   name: "Prashik",
//   age: 23,
//   city: "Pune"
// }

// for(let key in user){
//   console.log(key)
// }

// for(let key in user){
//   console.log(user[key])
// }

// for(let key in user){
//   console.log(key, user[key])
// }




// function sum(...num){
//     let total = num[0]+num[1]+num[2]
//     console.log(total)
// }
// sum(3,4,5)

// function sum(a,...num){
//     let total = a+ num[0]+num[1] ---grouping a=3
//     console.log(total)
// }
// sum(3,4,5)


// let students={
//     id: 256455,
//     name: "prashik,arun,vishwa",
//     Age: 22,
//     class: 'B'
// }
// let{id,name,...num}=students  //----------object destructuring
// console.log(students)



//  function obj({id, name,...hello}) // -----------------destructuring by other object to main object
// {
//     console.log(id)
//     console.log(name)
//     console.log(hello)
// let studentarr = name.split(",");   //-------------------- split, names in array
// console.log(studentarr);
//  }
// obj(students)



// cloning through spread operator, used to join 2 array------------------------------

// let arr = [2,25,45,78,54,45];
// let arr2 = [24,78,54,85,85,78]

// let newarr=[...arr,...arr2]; ----------join 2 array, clone to new array. Used on right side
// console.log(newarr);



// Rest opt used on left side------------------------------------

// let arr = [2,25,45,78,54,45];
//let arr2 = [24,78,54,85,85,78]

// let [a,b,c,...remain]=arr; 
// console.log(remain);

// ForEach-------------------------------

// let names = ["prashik","rohit", "avi", "harsh"]
// names.forEach(function(name){
//     console.log(name)
// })

// let users = [{
//     id : 14545,
//     std : "prashik",
//     branch: "IT",
//     age : 24
// },{
//     id : 5456,
//     std : "lucky",
//     branch: "IT",
//     age : 21
// },{
//     id : 14545,
//     std : "raj",
//     branch: "IT",
//     age : 23
// },{
//     id : 14545,
//     std : "aman",
//     branch: "IT",
//     age : 20
// },
// ]

// users.forEach((user)=>{
//     console.log(user)
// })

// arrowFunction-----------------------------------

// let arr = [25,45,12,45,78,15]

// const hello = (arr)=>{
//     console.log(arr)
// }
// hello(arr)

// const hello = (arr)=>console.log(arr)  //-----direct print if not return any value
// hello(arr)

// map is used to create a new array------------------------

// let arr = [24,78,56,89,58]

// let newarr = arr.map((arr1)=>{     //---------return new array
//     return arr1*2
// })
// console.log(newarr)

// let newarr = arr.map(arr1=>  arr1*3)   //-----------------in one line print 
// console.log(newarr)

// array of object ---------------------------------

// const users = [{
//     name: "raj",
//     id: 54564
// },
// {
//     name: "viswa",
//     id: 14564
// }]

// let user = users.map(user1=> user1.name)
// console.log(user)

// filter----------------------------------------------------

//  let arr = [10,20,30,50,40,80,70]

// const newprice=arr.filter((arr1)=>  arrow function--------------------
// {
//     if(arr1<=50){                  filter applied ---------------------------
//         return arr1
//     }
// })
// console.log(newprice);

// const newarr = arr.filter(arr1=> arr1>=50)     In one line with condition apply-------------------------------
// console.log(newarr)

// Array of Objects----------------------

// const students =[{
//     name: "prashik",
//     age : 24
// },
// {
//     name: "ajay",
//     age: 10
// },{
//     name: "raju",
//     age: 25
// }]

// let student = students.filter((std)=>{
//     if(std.age<=20){
//         return std
//     }
// })
// console.log(student)

// let student = students.filter(std=> std.age>=20)   ---------in one line
// console.log(student)
// Scope Where a variable can be accessed in the code-----------------------------------

// Global Scope -------------------------

// Variable accessible everywhere.--------------------------------------------

// let name = "Prashik"

// function test(){
//    console.log(name)
// }

// test()
// console.log(name)

// Function Scope ---------------------------------
// Variables declared inside a function can only be used inside that function.-------------------------------

// function demo(){
//    let age = 22
//    console.log(age)
// }

// demo()

// console.log(age)

// Block Scope----------------------------
// let and const are block scoped.---------------------------------

// {
//    let city = "Pune"
//    console.log(city)
// }

// console.log(city)

// Lexical Scope-----------------------------------------------
// Inner functions can access outer function variables.-------------------------------------------

// function outer(){
//    let name = "Prashik"

//    function inner(){
//       console.log(name)
//    }

//    inner()
// }

// outer()


// Auto global means:-------------------------
// a variable becomes global automatically if declared without let, const, or var.------------

// function test(){

//   name = "Prashik"

// }

// test()

// console.log(name)

// Hoisting in JavaScript
// Hoisting means:
// JavaScript moves declarations to the top before code execution.

// console.log(a)

// var a = 10

// function Hoisting

// greet()

// function greet(){
//   console.log("Hello")
// }

// callback function
// Pasing a function as an argument inside a other function.

// eg: Pizza boy says
// give me your no, i will call back later


// function outer(){

//   let count = 0

//   function inner(){

//     count++

//     console.log(count)

//   }

//   return inner
// }

// let result = outer()

// result()
// result()
// result()
// result()
// result()
// result()

// Closures
// A closure is the combination of a function bundled together (enclosed) 
// with references to its surrounding state (the lexical environment). In other words, a closure gives a function access
// to its outer scope.

// function outer(){

//     let name = "Prashik"

//     function inner(){
//         console.log(name)
//     }

//     return inner
// }

// const result = outer()

// result()

//Dom(document object model)
/* <h1 id="title">Hello</h1>

const heading = document.getElementById("title")
heading.innerText = "Welcome"
console.log(heading)

//change text
document.getElementById("demo").innerText = "Welcome"

//change colour
document.getElementById("demo").style.color = "red"

Dom manipulation
changing HTML/CSS/content of webpage using JavaScript.

By ID
document.getElementById("demo")

By Class
document.getElementsByClassName("box")

By Tag
document.getElementsByTagName("p")

Query Selector
document.querySelector(".box")

Input Example
<input id="name">
let value = document.getElementById("name").value

console.log(value) */

// NodeList is:
// a collection of DOM elements returned by some DOM methods.

// <p>One</p>
// <p>Two</p>
// <p>Three</p>
// let items = document.querySelectorAll("p")

// console.log(items)

// Access Elements
// Like array indexing.
// console.log(items[0])

// HTMLCollection is:

// a collection of HTML elements returned by some DOM methods.

// It is:
// array-like
// but NOT a real array

// Mostly returned by:
// getElementsByClassName()
// getElementsByTagName()


// <div class="box">One</div>
// <div class="box">Two</div>
// <div class="box">Three</div>

// let items = document.getElementsByClassName("box")
// console.log(items)

// Access Elements
// Using index.

// console.log(items[0])


// innerText, textContent, and innerHTML in JavaScript

// These are used to:
// get
// change
// content inside HTML elements.

// <div id="demo">
//   Hello
//   <span style="display:none">Hidden</span>
// </div>

// Example Comparison
// <div id="box">
//   Hello
//   <span style="display:none">World</span>
// </div>
// Results
// innerText   → Hello
// textContent → Hello World
// innerHTML   → Hello <span>World</span>

//creating new tag
/* <p>Hello</p>
const para = document.createElement("p")
para.setAttribute("class", "para2")
para.innerHTML= "World"
console.log(para)

document.append(newtag)
const body = document.getelementtagname("body")
body[0].append(newtag)


append() is used to:
add elements or text at the end of another element.

Append Multiple Elements
let h1 = document.createElement("h1")
h1.innerText = "Title"

let p = document.createElement("p")
p.innerText = "Paragraph"
document.body.append(h1, p)

let li = document.createElement("li")
li.innerText = "Apple"
document.querySelector("ul").append(li) */

// let data = ["Mouse", "Keypad","Laptop", "Powerbank", "cable"]

// const ull = document.getElementById("ul1");

// for(let i = 0; i < data.length; i++){
//  const litag = document.createElement("li");
//  litag.innerText = data[i];
//   ull.append(litag);
// }

//Eventlistner
// event means:
// Something that happens in webpage

// Examples:
// button click
// typing
// mouse move
// submit form

//old way
// const btn1=document.getElementById("btn")
// btn.onclick=()=>{
//     console.log("Hello event")
// }

//new
// const btn = document.getElementById("btn")
// btn.addEventListener("click", () =>{
//     alert("Button clicked")
// })

// Syntax:
// element.addEventListener("event", function)

// //Event Handler
// function responds to an event

// <button onclick="show()">Click Me</button>

// <script>

// function show(){
//     alert("Button clicked")
// }

// </script>

//Event object
//an object automatically created when an event happens

// const btn = document.getElementById("btn")
// const body = document.querySelector("body")
// btn.addEventListener('click', (e) => {
    // e.target.innerText = "Hello"
    // console.log(e.target)
    // console.log("Hello bhai")

    // const ischange = confirm("change color")
    // if(ischange){
    //     const colorName = prompt("Which color")
    //     console.log(colorName)
    //     body.style.backgroundColor = '${colorName}'
    // }
    // console.log("hello from js file")
// })

//text
    // const submit = document.getElementById("submit");
    // const colorName = document.getElementById("colorName")

    // submit.addEventListener("click", (e) => {
    //     e.preventDefault();
    //     body.style.backgroundColor = '${colorName.value}'
    //     console.log(colorName.value)
    // })

// setInterval() is used to:
// run a function repeatedly after a fixed time interval.
// Syntax
// setInterval(function, timeInMilliseconds)
// Example
// setInterval(() => {
//   console.log("Hello");
// }, 1000);

// Store Interval ID
// const intervalId = setInterval(() => {
//   console.log("Running...");
// }, 1000);

// intervalId can be used to stop the interval.
// Stop Interval
// Use clearInterval()

// const intervalId = setInterval(() => {
//   console.log("Hello");
// }, 1000);

// clearInterval(intervalId);

// setTimeout() is used to:
// run a function once after a specified delay.

// Syntax
// setTimeout(function, timeInMilliseconds)

// Example
// setTimeout(() => {
//   console.log("Hello");
// }, 2000);

// const timeoutId = setTimeout(() => {
//   console.log("Hello");
// }, 2000);
// clearTimeout(timeoutId);

// console.log("Start");

// setTimeout(() => {
//   console.log("Welcome");
// }, 3000);

// console.log("End");
// Output
// Start
// End
// Welcome

// JavaScript is synchronous by default, but it can handle asynchronous operations using:
// setTimeout()
// setInterval()
// Promises
// async/await
// Fetch API

// Event loop
// The Event Loop continuously checks whether the Call Stack is empty. 
// If it is, it takes pending callbacks from the Callback Queue and pushes them to the Call Stack for execution.

// Example
// console.log("Start");

// setTimeout(() => {
//   console.log("Hello");
// }, 2000);

// console.log("End");

// Output
// Start
// End
// Hello

// Callback Hell means:
// multiple nested callbacks inside callbacks, making code hard to read and maintain.
// Example
// setTimeout(() => {
//   console.log("Step 1");

//   setTimeout(() => {
//     console.log("Step 2");

//     setTimeout(() => {
//       console.log("Step 3");

//       setTimeout(() => {
//         console.log("Step 4");
//       }, 1000);

//     }, 1000);

//   }, 1000);

// }, 1000);
// Output
// Step 1
// Step 2
// Step 3
// Step 4

// Inversion of Control (IoC) in JavaScript
// In simple words:
// You give control of your function to someone else.

// Example with Callback
// function fetchData(callback) {
//   // Assume data comes later
//   callback();
// }

// fetchData(() => {
//   console.log("Data received");
// });

// Here:

// You wrote the callback function.
// But fetchData() decides when to execute it.

// So control is no longer fully in your hands.

// Promise is:
// an object that represents the future result of an asynchronous operation.

// Without promises, we get callback hell:

// getUser(() => {
//   getOrders(() => {
//     getPayment(() => {
//       console.log("Done");
//     });
//   });
// });

// Promises make code cleaner.

// Promise States

// A promise can be in 3 states:

// Pending   → Initial state
// Fulfilled → Success
// Rejected  → Failure

// Creating a Promise
// const promise = new Promise((resolve, reject) => {

//   let success = true;

//   if (success) {
//     resolve("Data received");
//   } else {
//     reject("Something went wrong");
//   }

// });
// Consuming a Promise
// promise
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// Output
// Data received
// then()

// Runs when promise is fulfilled.
// promise.then((result) => {
//   console.log(result);
// });
// catch()

// Runs when promise is rejected.
// promise.catch((error) => {
//   console.log(error);
// });

// Promise Chaining
// Promise.resolve(10)
//   .then(num => num * 2)
//   .then(num => num + 5)
//   .then(result => console.log(result));
// Output
// 25

// async and await in JavaScript
// async and await are used to handle Promises in a cleaner way.
// They make asynchronous code look like synchronous code.

// Without async/await

// function getData() {
//   return Promise.resolve("Hello");
// }

// getData()
//   .then(data => {
//     console.log(data);
//   });

// With async/await
// function getData() {
//   return Promise.resolve("Hello");
// }

// async function showData() {
//   const data = await getData();
//   console.log(data);
// }

// showData();

// Output
// Hello
// async

// When you add async before a function:

// async function test() {
//   return "Hello";
// }

// JavaScript automatically returns a Promise.
// test().then(data => console.log(data));

// Output:
// Hello

// await
// await pauses execution of the async function until the Promise is resolved.

// const result = await promise;

// Example with setTimeout
// function getData() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Data Loaded");
//     }, 2000);
//   });
// }

// async function fetchData() {
//   console.log("Loading...");

//   const data = await getData();

//   console.log(data);
// }
// fetchData();

// Output
// Loading...
// (Data waits 2 seconds)
// Data Loaded

//promise methods
// 1. Promise.resolve()
// Creates a resolved promise.

// const p = Promise.resolve("Success");
// p.then(data => console.log(data));

// Output
// Success

// 2. Promise.reject()
// Creates a rejected promise.
// const p = Promise.reject("Error");

// p.catch(err => console.log(err));

// Output
// Error

// 3. Promise.all()
// Waits for all promises to succeed.

// const p1 = Promise.resolve("A");
// const p2 = Promise.resolve("B");
// const p3 = Promise.resolve("C");

// Promise.all([p1, p2, p3])
//   .then(data => console.log(data));

//   Output
// ["A", "B", "C"]

// ❌ If even one promise fails, Promise.all() fails.

// 4. Promise.allSettled()
// Waits for all promises, whether they succeed or fail.

// Promise.allSettled([
//   Promise.resolve("A"),
//   Promise.reject("Error")
// ])
// .then(result => console.log(result));

// Output
// [
//   { status: "fulfilled", value: "A" },
//   { status: "rejected", reason: "Error" }
// ]

// 5. Promise.race()
// Returns the result of the first promise to settle.

// const p1 = new Promise(r => setTimeout(() => r("A"), 2000));
// const p2 = new Promise(r => setTimeout(() => r("B"), 1000));

// Promise.race([p1, p2])
//   .then(data => console.log(data));

//   Output
// B
// Because p2 finishes first.

// 6. Promise.any()
// Returns the first fulfilled promise.

// Promise.any([
//   Promise.reject("Error"),
//   Promise.resolve("Success")
// ])
// .then(data => console.log(data));

// Output
// Success

// Only fails if all promises fail.

// Error handling means:
// managing errors gracefully so the program doesn't crash unexpectedly.

// Without Error Handling

// console.log(a);
// Output
// ReferenceError: a is not defined

// Program stops at that point.

// Using 
// try...catch

// try {
//   console.log(a);
// } catch (error) {
//   console.log("Error occurred");
// }
// Output
// Error occurred

// The program continues running.

// Syntax
// try {
//   // risky code
// } catch (error) {
//   // handle error
// }

// finally always executes.

// try {
//   console.log("Try block");
// } catch (error) {
//   console.log("Catch block");
// } finally {
//   console.log("Finally block");
// }

// Output
// Try block
// Finally block


// Throw Custom Error
// let age = 15;

// try {
//   if (age < 18) {
//     throw new Error("Age must be 18 or above");
//   }
// } catch (error) {
//   console.log(error.message);
// }

// Output
// Age must be 18 or above

// Error Object Properties
// try {
//   console.log(a);
// } catch (error) {
//   console.log(error.name);
//   console.log(error.message);
// }
// Output
// ReferenceError
// a is not defined

// Common Error Types
// Error Type	Example
// ReferenceError	Variable not declared
// TypeError	Calling method on wrong type
// SyntaxError	Invalid syntax
// RangeError	Value out of range

// Example: TypeError
// let num = null;

// try {
//   num.toUpperCase();
// } catch (error) {
//   console.log(error.name);
// }
// Output
// TypeError

// Error Handling with Async/Await
// async function getData() {
//   try {
//     const result = await Promise.reject("API Error");
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// }
// getData();

// Output
// API Error

// fetch() is used to:

// make HTTP requests to a server or API and get data.

// It returns a Promise.

// Syntax
// fetch(url)
// Example
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//   });

//   Using Async/Await
// async function getUsers() {
//   const response = await fetch(
//     "https://jsonplaceholder.typicode.com/users"
//   );

//   const data = await response.json();

//   console.log(data);
// }
// getUsers();

// Why response.json()?
// The server sends data as JSON text.

// const data = await response.json();

// converts it into a JavaScript object/array.

// Error Handling
// async function getUsers() {
//   try {
//     const response = await fetch(
//       "https://jsonplaceholder.typicode.com/users"
//     );

//     const data = await response.json();

//     console.log(data);
//   } catch (error) {
//     console.log("Error:", error);
//   }
// }

// Local Storage vs Session Storage
// Both are used to store data in the browser.

// Local Storage
// Data remains even after:
// Browser closed
// Tab closed
// Computer restarted

// localStorage.setItem("name", "Prashik");
// const data = localStorage.getItem("name");
// console.log(data);

// Output:
// Prashik

// Remove data:
// localStorage.removeItem("name");

// Clear all data:
// localStorage.clear();

// Session Storage
// Data remains only while the tab is open.
// If you close the tab:
// Data is deleted automatically

// Example:
// sessionStorage.setItem("name", "Prashik");
// const data = sessionStorage.getItem("name");
// console.log(data);

// Store Object
// Convert object to JSON:

// const user = {
//   name: "Prashik",
//   age: 22
// };

// localStorage.setItem("user", JSON.stringify(user));

// Get object back:

// const data = JSON.parse(
//   localStorage.getItem("user")
// );

// console.log(data.name);

// Output:
// Prashik

// Interview Definition
// Local Storage stores data permanently until manually removed, while Session Storage stores data only for the current browser tab session.

// A Class is a blueprint (template) for creating objects.
// It helps us create multiple objects with the same properties and methods.

// Example
// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   greet() {
//     console.log(`Hello, my name is ${this.name}`);
//   }
// }

// const person1 = new Person("Prashik", 23);
// const person2 = new Person("Rahul", 25);

// person1.greet();
// person2.greet();
// Output
// Hello, my name is Prashik
// Hello, my name is Rahul

// constructor()
// A special method that runs automatically when an object is created using new.
// It initializes object properties.

// Example:

// constructor(name, age) {
//   this.name = name;
//   this.age = age;
// }

// this Keyword
// this refers to the current object.

// this.name = name;

// Means:
// Object's  = value passed to constructorname

// Object
// An object is an instance of a class. It contains actual values.

// Creating Objects
// const person1 = new Person("Prashik", 23);
// const person2 = new Person("Rahul", 25);

// Here:
// person1 and person2 are objects.
// They have their own values but share the same methods.

// Accessing Object Properties and Methods
// console.log(person1.name);
// person1.greet();
// Output
// Prashik
// Hello, my name is Prashik

// Example
// class Car {
//   constructor(brand, color) {
//     this.brand = brand;
//     this.color = color;
//   }

//   start() {
//     console.log(`${this.brand} car started`);
//   }
// }

// const car1 = new Car("BMW", "Black");
// const car2 = new Car("Tesla", "White");

// car1.start();
// car2.start();

// Output
// BMW car started
// Tesla car started

// A prototype is an object from which other objects can inherit properties and methods.
// Without prototype:

// function Person(name) {
//   this.name = name;

//   this.greet = function() {
//     console.log("Hello " + this.name);
//   };
// }

// const p1 = new Person("Prashik");
// const p2 = new Person("Rahul");

// Here, every object gets its own separate greet() function, which wastes memory.
// Using Prototype
// function Person(name) {
//   this.name = name;
// }

// Person.prototype.greet = function() {
//   console.log("Hello " + this.name);
// };

// const p1 = new Person("Prashik");
// const p2 = new Person("Rahul");

// p1.greet();
// p2.greet();

// Output
// Hello Prashik
// Hello Rahul

// Now, greet() is stored once in Person.prototype and shared by all objects.

// Class and Prototype
// JavaScript classes internally use prototypes.

// class Person {
//   constructor(name) {
//     this.name = name;
//   }

//   greet() {
//     console.log("Hello " + this.name);
//   }
// }

// const p1 = new Person("Prashik");

// p1.greet();

// Behind the scenes:
// Person.prototype.greet()

// is created and shared by all objects.

// call(), apply(), and bind() in JavaScript
// These methods are used to control the value of this inside a function.

// 1. call()
// call() invokes a function immediately and allows you to pass arguments one by one.

// Syntax
// functionName.call(thisValue, arg1, arg2, ...)
// Example
// const person = {
//   name: "Prashik",
// };

// function greet(city, country) {
//   console.log(`Hello, I am ${this.name} from ${city}, ${country}`);
// }

// greet.call(person, "Pune", "India");

// Output
// Hello, I am Prashik from Pune, India

// 2. apply()
// apply() also invokes a function immediately, but arguments are passed as an array.

// Syntax
// functionName.apply(thisValue, [arg1, arg2])
// Example
// const person = {
//   name: "Prashik",
// };

// function greet(city, country) {
//   console.log(`Hello, I am ${this.name} from ${city}, ${country}`);
// }

// greet.apply(person, ["Pune", "India"]);

// Output
// Hello, I am Prashik from Pune, India

// 3. bind()
// bind() does not execute the function immediately.
// It returns a new function with this permanently bound.

// Syntax
// const newFunction = functionName.bind(thisValue, arg1, arg2);
// Example
// const person = {
//   name: "Prashik",
// };

// function greet(city, country) {
//   console.log(`Hello, I am ${this.name} from ${city}, ${country}`);
// }

// const greetUser = greet.bind(person, "Pune", "India");

// greetUser();

// Output
// Hello, I am Prashik from Pune, India

// Inheritance is a feature that allows one class or object to use the properties and methods of another class or object.
// In simple words:
// A child class can inherit the features of a parent class.

// Example using class
// class Animal {
//   constructor(name) {
//     this.name = name;
//   }

//   eat() {
//     console.log(`${this.name} is eating`);
//   }
// }

// class Dog extends Animal {
//   bark() {
//     console.log(`${this.name} is barking`);
//   }
// }

// const dog1 = new Dog("Tommy");

// dog1.eat();
// dog1.bark();

// Output
// Tommy is eating
// Tommy is barking

// extends Keyword
// extends is used to create a child class from a parent class.

// class Dog extends Animal {}

// Here:
// Animal → Parent class (Super class)
// Dog → Child class (Sub class)

// super() Keyword
// super() calls the constructor of the parent class.

// Example:
// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
// }

// class Dog extends Animal {
//   constructor(name, breed) {
//     super(name); // Calls Animal constructor
//     this.breed = breed;
//   }
// }

// const dog = new Dog("Tommy", "Labrador");

// console.log(dog.name);
// console.log(dog.breed);

// Output
// Tommy
// Labrador

// Method Overriding
// A child class can provide its own version of a parent method.

// class Animal {
//   sound() {
//     console.log("Animal makes sound");
//   }
// }

// class Dog extends Animal {
//   sound() {
//     console.log("Dog barks");
//   }
// }

// const dog = new Dog();

// dog.sound();
// Output
// Dog barks

// The child method overrides the parent method.

// Imperative means:
// You tell the computer how to do something step by step.
// You manually control the DOM and write every instruction.

// Example (Vanilla JavaScript)
// const button = document.getElementById("btn");

// button.addEventListener("click", () => {
//   const heading = document.getElementById("title");
//   heading.innerText = "Hello React";
//   heading.style.color = "blue";
// });

// Here you are saying:

// Find the element
//        ↓
// Change the text
//        ↓
// Change the style

// You control every step.

// 2. Declarative Approach
// Declarative means:
// You tell the computer what the final UI should look like, and React handles how to update the DOM.

// Example (React)
// function App() {
//   const [text, setText] = React.useState("Hello JavaScript");

//   return (
//     <>
//       <h1>{text}</h1>

//       <button onClick={() => setText("Hello React")}>
//         Change Text
//       </button>
//     </>
//   );
// }

// Here you simply describe:

// If state = "Hello JavaScript"
//       ↓
// Show Hello JavaScript

// If state = "Hello React"
//       ↓
// Update UI automatically

// React decides how to update the DOM using the Virtual DOM.

// Components in React
// A component is a reusable piece of UI in React.

// Instead of writing the same HTML multiple times, you create a component once and reuse it.

// Example
// function App() {
//   return (
//     <h1>Hello React</h1>
//   );
// }

// export default App;
// Here, App is a component.

// Creating a Component
// Create a file named Header.jsx

// function Header() {
//   return <h1>Welcome to React</h1>;
// }

// export default Header;
// Now use it inside App.jsx.

// import Header from "./Header";

// function App() {
//   return (
//     <div>
//       <Header />
//     </div>
//   );
// }

// export default App;

// Output
// Welcome to React

// Why Components?
// Without components:

// <h1>Header</h1>
// <p>Content</p>

// <h1>Header</h1>
// <p>Content</p>

// <h1>Header</h1>
// <p>Content</p>

// Lots of repeated code.

// With components:

// <Header />
// <Header />
// <Header />

// Write once, use many times.

// Types of Components
// 1. Functional Component ✅ (Most Common)
// function Welcome() {
//   return <h2>Hello</h2>;
// }

// or

// const Welcome = () => {
//   return <h2>Hello</h2>;
// };

// 2. Class Component (Older)
// import React, { Component } from "react";

// class Welcome extends Component {
//   render() {
//     return <h2>Hello</h2>;
//   }
// }

// export default Welcome;

// Today, React mainly uses functional components with Hooks.

// Component Naming Rules

// ✅ Correct

// function Header() {}
// function UserProfile() {}

// ❌ Wrong

// function header() {}

// Component names must start with a capital letter.

// Components Can Contain Other Components
// function Header() {
//   return <h1>Header</h1>;
// }

// function Footer() {
//   return <h3>Footer</h3>;
// }

// function App() {
//   return (
//     <>
//       <Header />
//       <Footer />
//     </>
//   );
// }

// Babel in React
// Babel is a JavaScript compiler.
// It converts modern JavaScript (ES6+) and JSX into JavaScript that browsers can understand.

// Why Do We Need Babel?
// Browsers do not understand JSX.

// For example:

// const element = <h1>Hello React</h1>;

// The browser cannot run this directly.
// Babel converts it into:

// const element = React.createElement(
//   "h1",
//   null,
//   "Hello React"
// );

// Now the browser can understand it.

// Components and Props in React
// What is a Component?

// A component is a reusable piece of UI.

// Example:
// function Header() {
//   return <h1>Welcome to React</h1>;
// }

// export default Header;

// Use it in another component:

// import Header from "./Header";

// function App() {
//   return (
//     <>
//       <Header />
//     </>
//   );
// }

// What are Props?
// Props (short for Properties) are used to pass data from a parent component to a child component.

// Think of props as function arguments.

// Without Props
// function User() {
//   return <h2>Prashik</h2>;
// }

// function App() {
//   return (
//     <>
//       <User />
//       <User />
//       <User />
//     </>
//   );
// }

// Output
// Prashik
// Prashik
// Prashik

// Every component displays the same data.

// With Props
// User.jsx

// function User(props) {
//   return <h2>{props.name}</h2>;
// }

// export default User;
// App.jsx
// import User from "./User";

// function App() {
//   return (
//     <>
//       <User name="Prashik" />
//       <User name="Rahul" />
//       <User name="Amit" />
//     </>
//   );
// }

// export default App;

// Output
// Prashik
// Rahul
// Amit

// The same component displays different data because of props.

// Passing Multiple Props
// function User(props) {
//   return (
//     <>
//       <h2>Name: {props.name}</h2>
//       <p>Age: {props.age}</p>
//       <p>City: {props.city}</p>
//     </>
//   );
// }

// Use it:

// <User
//   name="Prashik"
//   age={23}
//   city="Pune"
// />

// Output
// Name: Prashik
// Age: 23
// City: Pune

// Props Destructuring
// Instead of writing:

// function User(props) {
//   return <h2>{props.name}</h2>;
// }

// Use destructuring:

// function User({ name, age }) {
//   return (
//     <>
//       <h2>{name}</h2>
//       <p>{age}</p>
//     </>
//   );
// }

// This is the preferred approach.

// Passing Arrays
// function App() {
//   const skills = ["HTML", "CSS", "JavaScript"];

//   return <User skills={skills} />;
// }
// function User({ skills }) {
//   return (
//     <ul>
//       {skills.map((skill) => (
//         <li key={skill}>{skill}</li>
//       ))}
//     </ul>
//   );
// }

// Passing Objects
// const user = {
//   name: "Prashik",
//   age: 23,
// };

// <User user={user} />
// function User({ user }) {
//   return (
//     <>
//       <h2>{user.name}</h2>
//       <p>{user.age}</p>
//     </>
//   );
// }

// Passing Functions

// Parent:

// function App() {
//   function greet() {
//     alert("Hello!");
//   }

//   return <Button onClick={greet} />;
// }

// Child:

// function Button({ onClick }) {
//   return <button onClick={onClick}>Click Me</button>;
// }

// Props are Read-Only

// ❌ Wrong

// function User(props) {
//   props.name = "Rahul";
// }

// Hooks in React

// Hooks are special functions in React that let you use features like state, lifecycle, and context inside functional components.

// Common React Hooks
// Hook	Purpose
// useState()	Manage state
// useEffect()	Handle side effects
// useContext()	Access context
// useRef()	Access DOM or persist values
// useMemo()	Optimize expensive calculations
// useCallback()	Memoize functions
// useReducer()	Manage complex state

// 1. useState()

// Used to store and update data.

// import { useState } from "react";

// function Counter() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <h2>{count}</h2>

//       <button onClick={() => setCount(count + 1)}>
//         Increment
//       </button>
//     </>
//   );
// }

// export default Counter;
// Output
// 0
// [Increment]

// After clicking:

// 1
// 2
// 3
// ...
// 2. useEffect()

// Runs code after the component renders.

// import { useEffect } from "react";

// function App() {
//   useEffect(() => {
//     console.log("Component Rendered");
//   });

//   return <h1>Hello</h1>;
// }

// Common uses:

// Fetch API data
// Timers
// Event listeners

