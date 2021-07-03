var firebaseConfig = {
   apiKey: "AIzaSyCl3f3iPDsFMLlFJSekco8uHm9-8mHptlM",
   authDomain: "kwitter---2-5368f.firebaseapp.com",
   databaseURL: "https://kwitter---2-5368f-default-rtdb.firebaseio.com",
   projectId: "kwitter---2-5368f",
   storageBucket: "kwitter---2-5368f.appspot.com",
   messagingSenderId: "986834429952",
   appId: "1:986834429952:web:beeec7690c29b50eb450e5",
   measurementId: "G-ZXV86BGBKK"
 };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");

    function go_away(){
       msg = document.getElementById("send_this").value;
       firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
       });
       document.getElementById("send_this").value = ""; 
    }
    //YOUR FIREBASE LINKS

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

