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