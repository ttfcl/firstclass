if(localStorage.getItem("userEmail")) {
  location.href = 'index.html'
}



var firebaseConfig = {
  apiKey: "AIzaSyCZRKoGQlxJCDO89l-p7u1YEd3GmY3pw_w",
  authDomain: "youn-ec1d7.firebaseapp.com",
  projectId: "youn-ec1d7",
  storageBucket: "youn-ec1d7.appspot.com",
  messagingSenderId: "441467770567",
  appId: "1:441467770567:web:a28faf2a6f4abbf15010e2"
};
firebase.initializeApp(firebaseConfig);

let registerButton = document.querySelector("#register")
let email = document.querySelector("#email")
let password = document.querySelector("#password")
let masterkey = 0;


let loginF = () => {
  if(localStorage.getItem("userEmail")) {
    alert("이미 로그인 되어 있습니다.")
    location.href = 'index.html'
  }
  if(email.value === '') {
    alert('이메일 칸이 비어 있습니다.')
  }else {
    firebase.auth().signInWithEmailAndPassword(email.value, password.value).then((result)=> {
      localStorage.setItem("userEmail" , email.value)
      localStorage.setItem("userDisplayName" , result.user.displayName)
      masterkey = 1;
      alert("성공적으로 로그인 되었습니다.")
      location.href = "./index.html";
    }).catch((result) => {
      if(masterkey === 0) {
      alert('이메일이 존재하지 않거나 비밀번호가 일치하지 않습니다.')
      }}
    )
  }
  // {
  //   if(email.value.search('@') === -1) {
  //     alert('올바른 형식의 이메일이 아닙니다.')
  //   }else {
  //     if(email.value.search('@') + 1 >= email.value.length){
  //       alert('올바른 형식의 이메일이 아닙니다.')
  //     }else {
  //       if(password.value === '') {
  //         alert('비밀번호가 입력되지 않았습니다.')
  //       }else {
  //         if(password.value.length < 6) {
  //           alert('비밀번호가 6자리 미만입니다.')
  //         }else {
  //           firebase.auth().signInWithEmailAndPassword(email.value, password.value).then((result)=> {
  //             localStorage.setItem("userEmail" , email.value)
  //             localStorage.setItem("userDisplayName" , result.user.displayName)
  //             masterkey = 1;
  //             alert("성공적으로 로그인 되었습니다.")
  //             location.href = "./index.html";
  //           }).catch((result) => {
  //             if(masterkey === 0) {
  //             alert('이메일이 존재하지 않거나 비밀번호가 일치하지 않습니다.')
  //             }}
  //           )
  //         }
  //       }
  //     }
  //   }
  // }
}

registerButton.onclick = function() {
  loginF()
}
$(document).ready(function(){
  $(document).on('keydown',function(e){
    if (e.keyCode == 13) { 
      loginF()
    }
  });
});