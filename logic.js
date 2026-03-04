let add=document.getElementById("add")
let input=document.querySelector("input")
let board=document.getElementById("board")
let clr=document.getElementById("clr")
let comp=document.getElementById("comp")
let arr=[]
add.addEventListener("click",()=>{
    let c=0
    arr.push(input.value)
    board.textContent = board.textContent +"\n"+arr.length+"."+ arr[arr.length-1]
    input.value=""
    board.style.textDecoration="none"
})
clr.addEventListener("click",()=>{
    board.textContent=""
    arr.length=0
})
comp.addEventListener("click",()=>{
    board.style.textDecoration="line-through"
    arr.length=0
})