
let email = document.getElementById("email");
let password = document.getElementById("password");
let message = document.getElementById("message");
let fb = firebase.auth();

function signup() {

    fb.createUserWithEmailAndPassword(email.value, password.value)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    message.innerHTML = "Sign Up Successful";
    message.style.color = "green";
    password.value = "";
    email.value = "";
    gotohomepage();
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    message.innerHTML = "Error: " + errorMessage;
    message.style.color = "red";
  });


}

function signin() {

    fb.signInWithEmailAndPassword(email.value, password.value)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    message.innerHTML = "Sign In Successful";
    message.style.color = "green";
    password.value = "";
    email.value = "";
   gotohomepage();
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    message.innerHTML = "Error: " + errorMessage;
    message.style.color = "red";
  });


}

function gotohomepage() {

    window.location.href = "../html files/home.html";

}

function signout() {
    fb.signOut().then(() => {
  window.location.href = "../sign up and sign in files/index.html"  ;
}).catch((error) => {
console.log(error);

});
}








