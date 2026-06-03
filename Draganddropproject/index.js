const box1 = document.querySelector(".box1")
const box2=  document.querySelector(".box2")

const items = document.querySelectorAll(".item")

for (let item of items){
    item.addEventListener('dragstart', (e)=>{
        let data = e.target        // ---> use this to items empty.
    //drag to drop
        box2.addEventListener('dragover', (e)=>{
            e.preventDefault();
            e.stopPropagation();
        })

        box2.addEventListener('drop', ()=>{
            box2.append(data);
            data = ''
        })

//from drop to drag
        box1.addEventListener('dragover', (e)=>{
            e.preventDefault();
            e.stopPropagation();
        })

        box1.addEventListener('drop', ()=>{
            box1.append(data);
            data = ''
        })
    })
}