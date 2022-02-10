let eBooks = document.querySelector(".ebook");
let video = document.querySelector(".video");
let ebookContent = document.querySelector(".ebook-content");
let videoContent = document.querySelector(".video-content");

video.addEventListener("click",()=>{
    video.style.borderBottom = "5px solid var(--carlet)";
    eBooks.style.borderBottom = "none";
    ebookContent.style.display = "none";
    videoContent.style.display = "grid";
})

eBooks.addEventListener("click",()=>{
    eBooks.style.borderBottom = "5px solid var(--carlet)";
    video.style.borderBottom = "none";
    ebookContent.style.display = "grid";
    videoContent.style.display = "none";
})