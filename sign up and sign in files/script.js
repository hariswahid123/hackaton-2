let email = document.getElementById("email");
let password = document.getElementById("password");
let name = document.getElementById("name");
let message = document.getElementById("message");

function logIn() {
  if (!email.value || !password.value || !name.value) {
    alert("Please enter name, email, and password");
    return;
  }

  if (password.value.length < 6) {
    alert("Password must be at least 6 characters");
    return;
  }

  localStorage.setItem("name", name.value);
  localStorage.setItem("email", email.value);
  localStorage.setItem("password", password.value);

  message.innerHTML = "Login successfully";
  message.style.color = "green";

  email.value = "";
  password.value = "";
  name.value = "";

  setTimeout(() => {
    window.location.href = "../html files/home.html";
  }, 100);
}
