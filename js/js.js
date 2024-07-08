let image = document.querySelectorAll(".image");
let nextButton = document.querySelector(".next");
let prevButton = document.querySelector(".prev");
let i = 0;

function nextClick() {
    image[i].style.display = "none";
    i++;
    if (i >= image.length) {
        i = 0;
    }
    image[i].style.display = "block";
}

function prevClick() {
    image[i].style.display = "none";
    i--;
    if (i < 0) {
        i = image.length - 1;
    }
    image[i].style.display = "block";
}

nextButton.addEventListener('click', nextClick);
prevButton.addEventListener('click', prevClick);