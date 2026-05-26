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
// let{id,name,...num}=students  ----------object destructuring
// console.log(students)



//  function obj({id, name,...hello}) // -----------------destructuring by other object to main object
// {
//     console.log(id)
//     console.log(name)
//     console.log(hello)
// let studentarr = name.split(",");   -------------------- split, names in array
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
