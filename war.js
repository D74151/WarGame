console.log("%cStart war game...", "background: red; color: yellow; font-size: x-large");

class Player {
    constructor(nameValue){
    this.name = nameValue
    this.handsWon = 0;
    this.currentCard = []
    this.playerHand = []//created properties of Player class

    }
}

class Deck {//create deck of cards with values
    constructor (){
        this.suits = ['hearts', 'diamonds', 'clubs', 'spades']//set suits of cards
        this.values = [2,3,4,5,6,7,8,9,10, 11,12,13,14]//set values of 52 card deck
        this.cardNames = [2,3,4,5,6,7,8,9,10,"Jack", "Queen", "King", "Ace"]

        this.deck = [];
        
        for (const suit of this.suits){


        for (const value of this.values){
           

            this.deck.push(new Card(value, this.cardNames[value - 2] + " of " + suit))
            
        } 
        }
    }
}

class Card {
    constructor(value, name){//each card has a suit and value
        this.value = value
        this.name = name
                 
            }
        }


class Game {
    constructor(){
        this.gameDeck = null
        this.player1 = [];
        this.player2 = [];
        //properties of Game class
    }


    playGame(){
     
        // create the player
        this.player1 = new Player("Player 1")
        this.player2 = new Player("Player 2")


        // create the deck of cards
      this.gameDeck = new Deck()

        // shuffle the cards

for (let index = 0; index < 52; index++) {

let tempCard = this.gameDeck.deck[index]
//picks a random number between 1 and 52
let randomCard = Math.floor(Math.random() * 52)
this.gameDeck.deck[index] = this.gameDeck.deck[randomCard]
this.gameDeck.deck[randomCard] = tempCard  
}
        // deal the cards
        this.player1.playerHand = this.gameDeck.deck.slice(0,26)
        this.player2.playerHand =this.gameDeck.deck.slice(26,52)
            compareCards(this.player1, this.player2)
    }
   


        
        // 6. show who wins, loses, or ties the game   
    }

    function compareCards(player1, player2){//take turns playing the game
console.log("The hands of War");
for(let i = 0; i < 26; i++){
        if (player1.playerHand[i].value > player2.playerHand[i].value) { //if player 1 wins add 1 to wonDeck
            player1.handsWon +=  1
            console.log(`P1 plays: ${player1.playerHand[i].name} P2 plays: ${player2.playerHand[i].name} `)//display hand of war          
            console.log("%cPLAYER 1 wins the hand", "background: purple; color: white; font-size: large")//display styled winner
        } else if 
            (player2.playerHand[i].value > player1.playerHand[i].value) {//if player 2 wins add 1 to wonDeck
                player2.handsWon +=  1               
                console.log(`P1 plays: ${player1.playerHand[i].name} P2 plays: ${player2.playerHand[i].name} `)
                console.log("%cPLAYER 2 wins the hand", "background: blue; color: white; font-size: large")
                
        } else {
            console.log(`P1 Plays:${player1.playerHand[i].name}
P2 Plays:${player2.playerHand[i].name}
It was a Draw.`)
        }
        
    }
if (player1.handsWon > player2.handsWon)// show winner, loser, or tie
console.log("%cPLAYER 1 WINS THE WAR!!", "background: red; color: yellow; font-size: x-large")
else if (player2.handsWon > player1.handsWon)
console.log("%cPLAYER 2 WINS THE WAR!!", "background: red; color: yellow; font-size: x-large")
else 
    console.log("%cIT WAS A DRAW, TRY AGAIN", "background: red; color: yellow; font-size: x-large")
}
let warGame = new Game()
warGame.playGame()
    