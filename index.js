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