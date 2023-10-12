function generateRandomInRange(a, b) {
    var randomNumber = a + Math.random() * (b - a);
    var numberValue = parseFloat(randomNumber.toFixed(0)); // Convert and round
    
    // Make sure the number is within the range [0, 5)
    if (numberValue >= a && numberValue <= b) //Променям < и > за ( или [!!!
    {
        return numberValue;
    } else {
        return generateRandomInRange(a, b); // Try again if not in range
    }
}
    document.addEventListener("DOMContentLoaded", function() {
        var random_1 = generateRandomInRange(1, 6);
        var random_2 = generateRandomInRange(1, 6);
    
        if (random_1 == 1) {
            document.querySelector(".img1").setAttribute("src", "./images/dice1.png");
        } else if (random_1 == 2) {
            document.querySelector(".img1").setAttribute("src", "./images/dice2.png");
        } else if (random_1 == 3) {
            document.querySelector(".img1").setAttribute("src", "./images/dice3.png");
        } else if (random_1 == 4) {
            document.querySelector(".img1").setAttribute("src", "./images/dice4.png");
        } else if (random_1 == 5) {
            document.querySelector(".img1").setAttribute("src", "./images/dice5.png");
        } else {
            document.querySelector(".img1").setAttribute("src", "./images/dice6.png");
        }
    
        if (random_2 == 1) {
            document.querySelector(".img2").setAttribute("src", "./images/dice1.png");
        } else if (random_2 == 2) {
            document.querySelector(".img2").setAttribute("src", "./images/dice2.png");
        } else if (random_2 == 3) {
            document.querySelector(".img2").setAttribute("src", "./images/dice3.png");
        } else if (random_2 == 4) {
            document.querySelector(".img2").setAttribute("src", "./images/dice4.png");
        } else if (random_2 == 5) {
            document.querySelector(".img2").setAttribute("src", "./images/dice5.png");
        } else {
            document.querySelector(".img2").setAttribute("src", "./images/dice6.png");
        }
        if (random_1 > random_2){
            document.querySelector("h1").textContent = "Player 1 wins!";
        }
        else if (random_1 < random_2) {
            document.querySelector("h1").textContent = "Player 2 wins!";
        }
        else {
            document.querySelector("h1").textContent = "Draw."
        }
    });
    
    
