




function update(){
    let alpha = "abcdefghijklmnopqrstuvwxyz"
    let num = 134567890
    let char = alpha + num

    let value = document.querySelector(".range-value")

    let random = Math.floor(Math.random()*100000)
    let div = document.querySelector(".area")
    div.innerHTML = random;
}


