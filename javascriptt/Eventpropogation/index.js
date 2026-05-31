const manindiv = document.getElementById("mainDiv")
const box1 = document.getElementById("div1")

box1.addEventListener("click" , () =>{
    console.log("box1")
})

manindiv.addEventListener("click", () =>{
    console.log("maindiv")
})

document.body.addEventListener("click", ()=>{
    console.log("body")
})