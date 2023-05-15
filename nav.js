let away = document.querySelector("#away")
let test = document.querySelector(".test")
let count = 0

away.onclick = () => {
    if(count === 0) {
        test.classList.remove("hide")
        count = 1
    }else {
        test.classList.add("hide")
        count = 0
    }
}