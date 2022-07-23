if (typeof window !== "undefined"){
    console.log("in window")
}else{
    console.log("not in window")
}
var count = 0
let countEl = document.getElementById("count-el")

function increment(){
count += 1
countEl.innerText = count
}

function decrement(){
    count -= 1
    countEl.innerText = count
    console.log(count)
}
function save(){
    console.log(count)
}
console.log(count)