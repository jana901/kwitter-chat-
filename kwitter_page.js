var firebaseConfig = {
      apiKey: "AIzaSyCT4K9Q-St0T-L86HXS6PUU1H272YdGFU4",
      authDomain: "practice-55ae3.firebaseapp.com",
      databaseURL: "https://practice-55ae3-default-rtdb.firebaseio.com",
      projectId: "practice-55ae3",
      storageBucket: "practice-55ae3.appspot.com",
      messagingSenderId: "196614530331",
      appId: "1:196614530331:web:ac8e9adfdfea9b2ece5fbe"
    };
    
    
   
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
function send(){
      msg=document.getElementById("message").value;
      firebase.database().ref(room_name).push({name:user_name,message:msg,like:0});
      document.getElementById("message").value="";
}