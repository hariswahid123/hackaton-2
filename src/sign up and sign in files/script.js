
let email = document.getElementById("email");
let password = document.getElementById("password");
let message = document.getElementById("message");
let name = document.getElementById("name");

function logIn() {
  
  if ( email.value == ""  || password.value === "" || name.value === ""){
    alert("please enter your password , email and name");
    return;
  }else if( password.value.length < 6){
    alert("your password is small");
    return;
  }
  else{
    let AddEmailLocalStorage = localStorage.setItem(" email " , email.value);
      let AddpasswordLocalStorage = localStorage.setItem(" password " , password.value);
      let AddNameLocalStorage = localStorage.setItem(" name " , name.value);
    
  }
  message.innerHTML = "login sucessfully";
  message.style.color = "green";
  email.value =  "";
  password.value =  "";
  name.value =  "";
  window.location = " ../html files/home.html "

}




