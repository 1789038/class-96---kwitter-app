//YOUR FIREBASE LINKS
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
    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();



function send()
{
msg=document.getElementById("msg").value;
firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0
});
document.getElementById("msg").value="";
}
