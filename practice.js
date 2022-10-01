
//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyARQaNF3ZNhtc0r8z7sH8PTrRd8Mzh9HDE",
    authDomain: "kwitter-18ffc.firebaseapp.com",
    databaseURL: "https://kwitter-18ffc-default-rtdb.firebaseio.com",
    projectId: "kwitter-18ffc",
    storageBucket: "kwitter-18ffc.appspot.com",
    messagingSenderId: "462770863687",
    appId: "1:462770863687:web:8ec9035b0cbb2aa8f07b62"
  };
  
  // Initialize Firebase
   firebase.initializeApp(firebaseConfig);

function addUser()
{
    user_name=document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose:"adding user"
    });
}