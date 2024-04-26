const wrapper = document.querySelector(".wrapper"); 
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

let yesBtnClicked = false;

yesBtn.addEventListener("click", () => {
    yesBtnClicked = true;
    question.innerHTML = " i love you tooo"; gif.src = 
    "https://raw.githubusercontent.com/DzarelDeveloper/Img/main/gif.webp";

    resetNoBtnPosition();
});

    

noBtn.addEventListener("mouseover", () => {

    if (!yesBtnClicked) {

    const noBtnRect = noBtn.getBoundingClientRect();
    const maxx = window.innerWidth - noBtnRect.width; 
    const maxY = window.innerHeight - noBtnRect.height;

    const randomX = Math.floor(Math.random() * maxx);
    const randomY = Math.floor(Math.random() * maxY);
    
    noBtn.style.left = randomX + "px"; 
    noBtn.style.top = randomY + "px"; 

    question.innerHTML = " Eiitsss Tidak Kena :) ";

    }

});

function resetNoBtnPosition() {
    noBtn.style.left = "initial"; // Atau ganti dengan posisi semula yang diinginkan
    noBtn.style.top = "initial";
    noBtn.removeEventListener("mouseover", noBtn);
}
