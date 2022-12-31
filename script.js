let cards =[]
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let player = {
  name: "Persunn",
  chips: 500,
}

let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": " + player.chips

function getRandomCard(){
  num = Math.floor(Math.random() * 13) + 1
  if (num > 11 && num <= 13){
    num = 10
  }else if (num === 1){
    num = 11
  }
  return num
}

function startGame(){
  isAlive = true
  let firstCard = getRandomCard()
  let secondCard = getRandomCard()
  cards = [firstCard,secondCard]
  sum = firstCard + secondCard
  renderGame()
}

function renderGame(){
  cardsEl.textContent = "Cards: "
  for(let i =0; i< cards.length;i++){
    cardsEl.textContent += cards[i] + " "
  }
  sumEl.textContent = "Sum:" + sum
    if (sum <= 20){
      message = "Do you want to draw  card?"
    }else if (sum === 21){
      message = "Woohoo!! you've got Black Jack!!"
      hasBlackJack = true
    }else{
      message = "You're out of the game"
      isAlive = false
    }
  messageEl.textContent = message
}

function newCard(){
  if (isAlive === true && hasBlackJack === false){
    let card = getRandomCard()
    cards.push(card)
    sum += card
    renderGame()
  }
}


