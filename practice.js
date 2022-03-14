
//ADD YOUR FIREBASE LINKS
const firebaseConfig = {
    apiKey: "AIzaSyBN_azCMOQ5pZNpx1hVInwo76kJWJq8aUk",
    authDomain: "test-fcdb6.firebaseapp.com",
    databaseURL: "https://test-fcdb6-default-rtdb.firebaseio.com",
    projectId: "test-fcdb6",
    storageBucket: "test-fcdb6.appspot.com",
    messagingSenderId: "526373217553",
    appId: "1:526373217553:web:b0fa6983155c3950f898b0",
    measurementId: "G-JNW9XPHEXE"
  };
  firebase.initializeApp(firebaseConfig);

  function add(){

    username = document.getElementById("input").value;

    firebase.database().ref("/").child(username).update({

        purpose:"adding user"

    })

  }