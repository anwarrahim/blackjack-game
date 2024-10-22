

let firstCard = 10
let secondCard = 4
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = " "

// 2. Create a startGame() function. Move the conditional
// below (line 11-20) inside the body of the function.

let messageEl = document.getElementById("message-el")
console.log(messageEl)

function startGame() {
    if (sum <= 20) {
        message = "Do you want to draw a new card? "
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! "
        hasBlackJack = true
    } else {
        message = "You're out of the game! "
        isAlive = false
    }
    // 2. Display the message in the messageEl using messageEl.textContent
    messageEl.textContent = message
}

