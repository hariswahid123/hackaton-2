// User welcome
let userName = localStorage.getItem("name") || "Guest";
document.getElementById("user-welcome").innerText = "Welcome " + userName;

// Log out
function logOut(){
    window.location = "../sign up and sign in files/index.html";
}

// Elements
let postText = document.getElementById("post-text");
let postImage = document.getElementById("post-image");
const postsContainer = document.querySelector(".posts");
const searchInput = document.getElementById("search-posts");

// Create Post
function post(){
    if(postText.value === "" || postImage.value === ""){
        alert("Please fill all inputs");
        return;
    }

    const postDiv = document.createElement('div');
    postDiv.classList.add('post');
    postDiv.innerHTML = `
        <img src="${postImage.value}" alt="Post Image">
        <div class="post-content"><p>${postText.value}</p></div>
        <div class="post-footer">
            <span class="like-btn">❤️ 0</span>
            <span class="delete-btn">Delete</span>
            <span class="post-time">${new Date().toLocaleString()}</span>
        </div>
    `;

    // Like button
    const likeBtn = postDiv.querySelector(".like-btn");
    let liked = false;
    let count = 0;
    likeBtn.addEventListener("click", () => {
        liked = !liked;
        count = liked ? 1 : 0;
        likeBtn.classList.toggle("liked", liked);
        likeBtn.innerText = `❤️ ${count}`;
    });

    // Delete button
    const deleteBtn = postDiv.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", () => {
        if(confirm("Are you sure you want to delete this post?")){
            postDiv.remove();
        }
    });

    postsContainer.prepend(postDiv);

    // Clear inputs
    postText.value = "";
    postImage.value = "";
}

// Search posts
searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();
    document.querySelectorAll(".post").forEach(post => {
        const text = post.querySelector(".post-content p").innerText.toLowerCase();
        post.style.display = text.includes(query) ? "block" : "none";
    });
});

// Theme toggle
const themeToggle = document.getElementById('theme-toggle');
let savedTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', savedTheme);
themeToggle.textContent = savedTheme === 'light' ? '🌙' : '☀️';

themeToggle.addEventListener('click', () => {
    let current = document.documentElement.getAttribute('data-theme');
    if(current === 'light') {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeToggle.textContent = '☀️';
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        themeToggle.textContent = '🌙';
        localStorage.setItem('theme', 'light');
    }
});

// Existing posts like & delete functionality
document.querySelectorAll(".post").forEach(post => {
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
        if(confirm("Are you sure you want to delete this post?")){
            post.remove();
        }
    });
});
