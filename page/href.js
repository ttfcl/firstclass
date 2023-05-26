let abc, defg

var firebaseConfig = {
    apiKey: "AIzaSyArYfc5A61zRTmKHurBuQ50YccyQjpSFbI",
    authDomain: "link-f7ff3.firebaseapp.com",
    projectId: "link-f7ff3",
    storageBucket: "link-f7ff3.appspot.com",
    messagingSenderId: "324139020031",
    appId: "1:324139020031:web:c06cd9ebc043514658e6ca"
    };
    firebase.initializeApp(firebaseConfig);
  
  const db = firebase.firestore();
  db.collection('product').doc('firstclass').get().then((결과)=>{
    abc = 결과.data().kt
      console.log(abc)
  })
  db.collection('product').doc('firstclass').get().then((결과)=>{
    defg = 결과.data().te
      console.log(defg)
  }).then(() => {
    const gesipanR = document.querySelectorAll('.katalkLink')
    console.log(abc)
    for(let a of gesipanR) {
        a.href = abc
    }
    const gesipanD = document.querySelectorAll('.teleLink')
    console.log(defg)
    for(let a of gesipanD) {
        a.href = defg
    }
  })