const colors = ["green", "red", "rgba(133,122,200)", "#f15025"]; //colors array
const btn = document.getElementById('btn');
const color = document.querySelector(".color");

//events
btn.addEventListener('click', function () {
    //get random number between 0 - 3 colors[0]
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
})

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}

