var images = [
    "images/image1.jpg",
    "images/image2.jpeg",
    "images/image3.jpeg",
    "images/image4.jpeg",
    "images/image5.jpeg",
    "images/image6.jpeg",
]
var imageHead = document.getElementById("image-head");
var i = 0;

setInterval(function() {
    imageHead.style.backgroundImage = "url(" + images[i] + ")";
    i = i + 1;
    if (i == images.length) {
        i = 0;
    }
}, 15 * 1000);


document.getElementByclass("left-button").addEventListener("click", () => { plusDivs(-1) });
document.getElementByclass("right-button").addEventListener("click", () => { plusDivs(1) });

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var b;
    var x = document.getElementsByClassName("slide");
    if (n > x.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = x.length }
    for (b = 0; b < x.length; b++) {
        x[b].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
}
