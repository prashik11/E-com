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


let students={
    id: 256455,
    name: "prashik",
    Age: 22,
    class: 'B'
}
// let{id,name,...num}=students  ----------object destructuring
// console.log(students)

function obj({id, name,...hello}) // -----------------destructuring by other object to main object
{
    console.log(id)
    console.log(name)
    console.log(hello)
}
obj(students)

