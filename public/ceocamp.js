const firebaseConfig = {
    apiKey: "AIzaSyBuJOkmr2jJlGXXvjylnEcnrAUJfKimzJc",
    authDomain: "chat-b0e93.firebaseapp.com",
    databaseURL: "https://chat-b0e93-default-rtdb.firebaseio.com",
    projectId: "chat-b0e93",
    storageBucket: "chat-b0e93.appspot.com",
    messagingSenderId: "816740064838",
    appId: "1:816740064838:web:858b1d694e0c8f9f54f447",
    measurementId: "G-QFZFF65V7F"
  };
  
firebase.initializeApp(firebaseConfig);
database = firebase.database();


function sendMsg(){
    let date = new Date();
    let msg = $("#message").val();
    database.ref("msgs/"+date.getTime()).set(msg);
    $("#message").val("");
}

function loadMsgs(){
    database.ref("msgs").on("value", callback);
    function callback(snapshot){
        $("#chatlist").html("");
        console.log(snapshot);
        snapshot.forEach(function(child){
             $("#chatlist").append("<div>"+child.val()+"</div>");
        });
        $("#chatlist").scrollTop(15000);
    }
}
