function getRandomNumber(number) {
    return Math.floor(Math.random() * number) + 1;
}

function refreshPage() {

    var randomNumber1, randomNumber2;

    randomNumber1 = getRandomNumber(6);
    randomNumber2 = getRandomNumber(6);

    var newImage1Source = "./images/dice" + randomNumber1 + ".png";
    var newImage2Source = "./images/dice" + randomNumber2 + ".png";

    var images = document.querySelectorAll("img");

    images[0].setAttribute("src", newImage1Source);
    images[1].setAttribute("src", newImage2Source);

    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = "🚩Player 1 Wins!"
    }
    else if (randomNumber1 < randomNumber2) {
        document.querySelector("h1").innerHTML = "Player 2 Wins!🚩"
    }
    else {
        document.querySelector("h1").innerHTML = "Draw!"
    }
}

document.getElementById("rollButton").onclick = function () {
    refreshPage()
};
