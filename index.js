const btn = document.querySelector(".icon-btn");
const headers = document.querySelector(".header");
 const togglenavbar = () => {
    headers.classList.toggle("active");
}


btn.addEventListener("click", () => togglenavbar());