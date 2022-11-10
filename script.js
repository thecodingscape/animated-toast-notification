const toastBtn = document.querySelector(".toast-btn");
const toastBox = document.querySelector(".toast-box");
const toastCloseBtn = document.querySelector(".toast-close");


toastBtn.addEventListener("click", ()=>{
    toastBox.classList.add("active");
    //console.log("button clicked!");
});

toastCloseBtn.addEventListener("click", ()=>{
    toastBox.classList.remove("active");
});