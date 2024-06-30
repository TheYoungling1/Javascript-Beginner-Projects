const colorBtn = document.body.querySelector("#btn");
const background = document.body.querySelector(".content"); // Select the body element to change its background color
const colorText = document.body.querySelector("#color"); // Select the element to display the color

// Initial randomisation
const r = parseInt(getRandomInt(255));
const g = parseInt(getRandomInt(255));
const b = parseInt(getRandomInt(255));
const rgbColor = `rgb(${r}, ${g}, ${b})`;

background.style.backgroundColor = rgbColor
colorText.textContent = rgbColor; // Update the text to display the RGB color

function getRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
}

colorBtn.addEventListener('click', () => {
    const r = parseInt(getRandomInt(255));
    const g = parseInt(getRandomInt(255));
    const b = parseInt(getRandomInt(255));
    const rgbColor = `rgb(${r}, ${g}, ${b})`;

    background.style.backgroundColor = rgbColor
    colorText.textContent = rgbColor; // Update the text to display the RGB color
});

