let display1 = document.querySelector(".display1")
let display2 = document.querySelector(".display2")
let logout = document.querySelector(".logout")
let displayNameOn = document.querySelector("#displayName")


let change = () => {
  if(localStorage.getItem("userDisplayName") !== null) {
    display2.classList.add("hide") 
    displayNameOn.textContent = localStorage.getItem("userDisplayName")
    display1.classList.remove("hide")    
  }
}
change()
let change2 = () => {
    display1.classList.add("hide")   
    display2.classList.remove("hide") 
}
logout.onclick = function() {
  firebase.auth().signOut().then(()=>{
    localStorage.removeItem("userEmail")
    localStorage.removeItem("userDisplayName")
    change2()
    alert("로그아웃 되었습니다.")
  })
}
