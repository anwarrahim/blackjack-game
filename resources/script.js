
// creating object
let player = {
    name : "Anwar",
    chips: 34
}


let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = " "



let messageEl = document.getElementById("message-el")
console.log(messageEl)
// sum the value of card

let sumEl = document.getElementById("sum-el")

// card values

let cardEl = document.querySelector(".card-el")
let playerEl = document.getElementById("player-el")


function startGame(){
    isAlive = true
    let firstCard = getRandomNumber()
    let secondCard = getRandomNumber()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
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
        isAlive = true
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! "
        hasBlackJack = true
    } else {
        message = "You're out of the game! "
        isAlive = false
    }
    // 2. Display the message in the messageEl using messageEl.textContent
    messageEl.textContent = message
    playerEl.textContent = player.name +": $"+ player.chips
}


function newCard(){
   if(isAlive === true || hasBlackJack ===true){
       let card = getRandomNumber()
       cards.push(card)
       sum +=card
       renderGame()
   }
}


