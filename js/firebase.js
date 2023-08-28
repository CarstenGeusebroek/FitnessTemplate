var firebaseConfig = {
    apiKey: "AIzaSyCHWdvYmC3HmxwjFs5T0D4jl9vfo20yVx8",
    authDomain: "schoolpo1.firebaseapp.com",
    projectId: "schoolpo1",
    storageBucket: "schoolpo1.appspot.com",
    messagingSenderId: "542978201149",
    appId: "1:542978201149:web:bd85cba5f94c89d7eebc54",
    databaseURL: "https://schoolpo1-default-rtdb.europe-west1.firebasedatabase.app"
};

firebase.initializeApp(firebaseConfig);

var database = firebase.database();

// Get a reference to the data you want to load
var ref = database.ref("naam");

// Use the once() method to load the data
ref.once("value")
  .then(function(snapshot) {
    var data = snapshot.val();
    // Do something with the data
    console.log(data);
});
