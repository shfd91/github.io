const images = [
	"0.jpeg",
	"1.jpeg",
	"2.jpeg"
]

const chosenImage = images[Math.floor(Math.random() * images.length)];
const image = document.createElement("img");
document.body.appendChild(image);
image.classList.add("bgImage");

const imgSrc = `img/${chosenImage}`;
image.src = imgSrc;


// const body = document.querySelector("body");
// body.style.backgroundImage = `url(${imgSrc})`;