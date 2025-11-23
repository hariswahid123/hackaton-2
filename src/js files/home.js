let userName = localStorage.getItem("name") || "Haris";
document.getElementById("user-welcome").innerHTML = `Welcome ${userName}`;

function logOut(){
    window.location = "../sign up and sign in files/index.html";
}

// Create post
const postText = document.getElementById("post-text");
const postImage = document.getElementById("post-image");
const postBtn = document.getElementById("post-btn");
const postsContainer = document.querySelector(".posts");

postBtn.addEventListener("click", () => {
    if(postText.value === "" || postImage.value === ""){
        alert("Please fill input");
        return;
    }

    const post = document.createElement("div");
    post.classList.add("post");

    post.innerHTML = `
        <img src="${postImage.value}" alt="Post Image">
        <div class="post-content"><p>${postText.value}</p></div>
        <div class="post-footer">
            <span class="like-btn">❤️ 0</span>
            <span class="delete-btn">Delete</span>
            <span class="post-time">${new Date().toLocaleString()}</span>
        </div>
    `;

    // Add reactions
    const likeBtn = post.querySelector(".like-btn");
    const reactionsPanel = document.createElement("div");
    reactionsPanel.classList.add("reactions-panel");

    ["❤️","😂","😢","😡"].forEach(emoji => {
        const span = document.createElement("span");
        span.textContent = emoji;
        span.addEventListener("click", () => { likeBtn.textContent = `${emoji} 1`; reactionsPanel.style.display = "none"; });
        reactionsPanel.appendChild(span);
    });
    post.appendChild(reactionsPanel);

    likeBtn.addEventListener("click", () => {
        reactionsPanel.style.display = reactionsPanel.style.display === "flex" ? "none" : "flex";
        reactionsPanel.style.flexDirection = "row";
    });

    post.querySelector(".delete-btn").addEventListener("click", () => {
        if(confirm("Delete this post?")) post.remove();
    });

    postsContainer.prepend(post);
    postText.value = "";
    postImage.value = "";
});

// Search posts
const searchInput = document.getElementById("search-posts");
searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();
    document.querySelectorAll(".post").forEach(post => {
        const text = post.querySelector(".post-content p").innerText.toLowerCase();
        post.style.display = text.includes(query) ? "block" : "none";
    });
});

// Dark/Light mode
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

// Add reactions to existing posts
document.querySelectorAll(".post").forEach(post => {
    const likeBtn = post.querySelector(".like-btn");
    const reactionsPanel = document.createElement("div");
    reactionsPanel.classList.add("reactions-panel");

    ["❤️","😂","😢","😡"].forEach(emoji => {
        const span = document.createElement("span");
        span.textContent = emoji;
        span.addEventListener("click", () => { likeBtn.textContent = `${emoji} 1`; reactionsPanel.style.display = "none"; });
        reactionsPanel.appendChild(span);
    });

    post.appendChild(reactionsPanel);
    likeBtn.addEventListener("click", () => {
        reactionsPanel.style.display = reactionsPanel.style.display === "flex" ? "none" : "flex";
        reactionsPanel.style.flexDirection = "row";
    });
});
