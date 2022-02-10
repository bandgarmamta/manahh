let eBooks = document.querySelector(".ebook");
let video = document.querySelector(".video");


video.addEventListener("click",()=>{
    video.style.borderBottom = "5px solid var(--carlet)";
    eBooks.style.borderBottom = "none";
})

eBooks.addEventListener("click",()=>{
    eBooks.style.borderBottom = "5px solid var(--carlet)";
    video.style.borderBottom = "none";
})