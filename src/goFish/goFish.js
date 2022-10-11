import React, { useState, useEffect } from "react";
import "./styles.css";

export default function GoFish() {
  const [cards, setCards] = useState([]);
  const [playerHand, genPlayerHand] = useState([]);
  const [computerHand, genComputerHand] = useState([]);

  useEffect(() => {
    //suits for cards
    let suits = ["♢", "♡", "♧", "♤"];
    //generate cards with values of 1-K
    let genCards = suits.flatMap((suit) => {
      return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"].map((val) => {
        return { val: val + suit, active: true };
      });
    });

    //card set is generated cards
    setCards(genCards);

    //function to shuffle an array -- Fisher-Yates shuffle
    function shuffle() {
      for (var i = genCards.length - 1; i > 0; i--) {
        var x = Math.floor(Math.random() * (i + 1));
        var tempVal = genCards[i];
        genCards[i] = genCards[x];
        genCards[x] = tempVal;
      }
    }

    //shuffe
    shuffle(genCards);

    //generate cards for each hand - 7 per, and remove those cards from array
    let genPlayerHand = playerHand.map((playerHand) => {
      for (var i = 0; i < 7; i++) {
        //loop through moving top 7 from deck to player hand
      }
      return playerHand;
    });

    //duplicate process with computer hand
    let genComputerHand = playerHand.map((computerHand) => {
      for (var i = 0; i < 7; i++) {
        //loop through moving top 7 from deck to player hand
      }
      return playerHand;
    });
  }, []);

  //set turn value to 1
  //const turnVal = 1;

  //check to see if any four card values match each other (minus the suit)
  //if they do, remove cards from array and add score to player and computer respectively
  //then start user turn

  //user turn:
  //check if turn value is odd - if it is, turn is allowed
  //if value is even, alert that it is the comp turn
  //select a card from hand
  //if computer has cards of matching value (minus suit), put them in player hand
  //check for matching four cards once again and add to score if necessary
  //if computer doesn't have card, take card from remaining array/deck
  //check once more for four and add score if necessary
  //call computer turn function

  //computer turn:
  //select random card from hand
  //if user has matching value, put them in computer hand
  //check for four and add to score if there is
  //draw random card from deck if not
  //check for four again and add score if necessary
  //display player's turn alert

  //add card to hand function
  function drawCard() {}

  //if deck + both hands are empty, game is over
  function checkWin() {
    if ((playerHand = [] && computerHand == [] && cards == [])) {
      //check points
      //display win, loose, or tie
    }
  }

  //card display
  let cardDisplay = cards.map((card) => {
    return <div className="card">{card.val}</div>;
  });

  return <div className="cardStack">{cardDisplay}</div>;
}
