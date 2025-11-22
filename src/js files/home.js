
let userName = localStorage.getItem("name");

document.getElementById("user-welcome").innerHTML = "Welcome " + userName;

console.log(localStorage);

function logOut(){
    window.location = "../sign up and sign in files/index.html";
}

let postText = document.getElementById("post-text");
let postImage = document.getElementById("post-image");

function post(){

    if(postText.value === "" || postImage.value === ""){
        alert("please fill input")
        return;
    }else{
        alert("submitted")
    }

    postText.value = ""
    postImage.value = ""



}

const posts = document.querySelectorAll(".post");

posts.forEach(post => {
  const likeBtn = post.querySelector(".like-btn");
  const deleteBtn = post.querySelector(".delete-btn");
  let liked = false;
  let count = 0;

  likeBtn.addEventListener("click", () => {
    liked = !liked;
    count = liked ? 1 : 0;
    likeBtn.classList.toggle("liked", liked);
    likeBtn.innerText = `❤️ ${count}`;
  });

  deleteBtn.addEventListener("click", () => {
    if (confirm("Are you sure you want to delete this post?")) {
      post.remove();
    }
  });
});

const searchInput = document.getElementById("search-posts");
const posted = document.querySelectorAll(".post");

searchInput.addEventListener("input", function() {
    const query = searchInput.value.toLowerCase();

    posted.forEach(post => {
        const text = post.querySelector(".post-content p").innerText.toLowerCase();
        if(text.includes(query)){
            post.style.display = "block";
        } else {
            post.style.display = "none";
        }
    });
});









