let away = document.querySelector("#away")
let test = document.querySelector(".test")
let away2 = document.querySelector("#away2")
let test2 = document.querySelector(".test2")
let count = 0
let count2 = 0

away.onclick = () => {
    if(count === 0) {
        test.classList.remove("hide")
        count = 1
    }else {
        test.classList.add("hide")
        count = 0
    }
}
away2.onclick = () => {
    if(count2 === 0) {
        test2.classList.remove("hide")
        count2 = 1
    }else {
        test2.classList.add("hide")
        count2 = 0
    }
}