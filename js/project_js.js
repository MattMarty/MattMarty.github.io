
function adduser(){
    alert("adding user!");
    var email= document.getElementById("NewEmail").value;
    var password = document.getElementById("NewPass").value;
    firebase.auth().createUserWithEmailAndPassword(email,
        password).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert("error"+ error.message);});}

function signIn(){
    alert("Signing In");
    var email= document.getElementById("email").value;
    var password = document.getElementById("pass").value;
    firebase.auth().signInWithEmailAndPassword(email,
        password).catch(function(error) {alert("Error signing in");
        var errorCode = error.code;
        var errorMessage = error.message;
    });
}

function signOut(){
    firebase.auth().signOut().then(function() {
        alert("Signed out!");
    }).catch(function(error) {
    });
}

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        alert(user.email);
        console.log(user.toJSON());
    }else {
        alert("user not signed in")}
});
var db = firebase.firestore();
function addData(){
    alert("adding data");
    var comments = document.getElementById("comment").value;
    db.collection("comments").add({
        comment: comments,
    })
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
            getProducts();
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
}

function Newpass() {
    var x = document.getElementById("NewPass");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}
function pass() {
    var x = document.getElementById("Pass");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}