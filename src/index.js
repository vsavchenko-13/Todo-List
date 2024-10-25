import "./styles.css";
const firstHeader = document.querySelector("h1");
console.log("hai");

const randomText = document.createElement("h3");
randomText.textContent = "Just some random text";
firstHeader.appendChild(randomText);
