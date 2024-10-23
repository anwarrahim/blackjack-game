

let firstCard = getRandomNumber()
let secondCard = getRandomNumber()
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

//..................................
//
// Get Random Number.................................

function getRandomNumber(){
   let randomNumber= Math.floor(Math.random() * 13) +1
    if (randomNumber > 10){
        return 10
    }
    else if (randomNumber === 1){
        return 11
    }
    else {
        return randomNumber
    }
}


function renderGame() {
    cardEl.textContent = "Card: "
    for(let i =0; i<cards.length; i++){
        cardEl.textContent += cards[i] +" "
    }
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
    let card = getRandomNumber()
    cards.push(card)
    sum +=card
    renderGame()
}


