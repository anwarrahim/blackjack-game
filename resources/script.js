

let firstCard = 10
let secondCard = 3
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = " "


// 2. Create a startGame() function. Move the conditional
// below (line 11-20) inside the body of the function.

let messageEl = document.getElementById("message-el")
console.log(messageEl)
// sum the value of card

let sumEl = document.getElementById("sum-el")

// card values

let cardEl = document.querySelector(".card-el")


function startGame(){
    renderGame()
}

function renderGame() {

    cardEl.textContent = "Card: "+ firstCard +" "+ secondCard
    sumEl.textContent = "Sum: " + sum
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


function newCard(){
    let card = 4;
    sum +=card
    cards.push(card)
    renderGame()
}


