const chai = require("chai");
const assert = chai.assert;
const expect = chai.expect;
const Suits = require('./Suits');
const Faces = require('./Card').Faces;
const Card = require('./Card').Card;

// Deck {
//   ctor(cards);
// 
//   function draw();
//   function shuffle();
// 
//   function peek();
//   function toString();
// }

describe('Deck', () => {
  const defaultCards = [new Card('♠️', 'A'), new Card('♠️', '2'), new Card('♠️', '3'), new Card('♠️', '4'), new Card('♠️', '5'), 
  new Card('♠️', '6'), new Card('♠️', '7'), new Card('♠️', '8'), new Card('♠️', '9'), new Card('♠️', '10'), 
  new Card('♠️', 'J'), new Card('♠️', 'Q'), new Card('♠️', 'K'),

  new Card('♥️', 'A'), new Card('♥️', '2'), new Card('♥️', '3'), new Card('♥️', '4'), new Card('♥️', '5'), 
  new Card('♥️', '6'), new Card('♥️', '7'), new Card('♥️', '8'), new Card('♥️', '9'), new Card('♥️', '10'), 
  new Card('♥️', 'J'), new Card('♥️', 'Q'), new Card('♥️', 'K'),

  new Card('♣️', 'A'), new Card('♣️', '2'), new Card('♣️', '3'), new Card('♣️', '4'), new Card('♣️', '5'), 
  new Card('♣️', '6'), new Card('♣️', '7'), new Card('♣️', '8'), new Card('♣️', '9'), new Card('♣️', '10'), 
  new Card('♣️', 'J'), new Card('♣️', 'Q'), new Card('♣️', 'K'),

  new Card('♦️', 'A'), new Card('♦️', '2'), new Card('♦️', '3'), new Card('♦️', '4'), new Card('♦️', '5'), 
  new Card('♦️', '6'), new Card('♦️', '7'), new Card('♦️', '8'), new Card('♦️', '9'), new Card('♦️', '10'), 
  new Card('♦️', 'J'), new Card('♦️', 'Q'), new Card('♦️', 'K'),
  describe('#constructor', () => {
    it ('with empty constructor will create a deck with 52 cards', () => {
      /* Arrange */
      let expectedCount = 52;
    
      /* Act / Invoke */
      let deck = new Deck();
  
     /* Assert */
     expect(deck.peek()).to.have.lengthOf(expectedCount);
      
    });

    it ('with empty constructor should initialize a standard deck', () => {
     /* Arrange */
     
   ];
    
      /* Act / Invoke */
      let deck = new Deck();
   
       /* Assert */
       expect(deck.peek()).to.have.deep.members(expectedCards)
     });

     it ('with array of cards, should initialize cards to provided values', (done) => {
     /* Arrange */
    
       /* Act / Invoke */
    
       /* Assert */
       assert.fail('Not implemented');
     });
  });
  describe('#shuffle', () => {
    // it ('with empty deck should not throw error', (done) => {
    //   /* Arrange */
    //
    //   /* Act / Invoke */
    //
    //   /* Assert */
    //   assert.fail('Not implemented');
    // });

    //  it ('with one card should remain unshuffled', (done) => {
    //   /* Arrange */
    
    //   /* Act / Invoke */
    
    //    /* Assert */
    //   assert.fail('Not implemented');
    //  });

     it ('should not remove or alter any existing cards in the deck', (done) => {
      /* Arrange */
      let deck = new Deck();
    
      /* Act / Invoke */
      deck.shuffle();
    
       /* Assert */
       expect(deck.peek()).to.have.lengthOf(52);
       expect(deck.peek()).to.have.deep.members(defaultCards);
     });

     it ('with multiple cards should change position of at least one card', (done) => {
       /* Arrange */
       let deck = new Deck();
       let originalCards = defaultCards;
    
       /* Act / Invoke */
       deck.shuffle();
    
       /* Assert */
      expect(deck.peek()).to.have.lengthOf(defaultCards.length);

      let changePosition = false;
      deck.peek().forEach((card,index) => {
        if (card.toString() !== originalCards[index]).toString()) {
          changePosition = true
        };
      });
      expect(changedPosition).to.be.true;

    });
  });
  describe('#draw', () => {
    // it ('with empty deck should return null', (done) => {
    //   /* Arrange */
    //
    //   /* Act / Invoke */
    //
    //   /* Assert */
    //   assert.fail('Not implemented');
    // });

    // it ('should return card at the top of the deck', (done) => {
    //   /* Arrange */
    //
    //   /* Act / Invoke */
    //
    //   /* Assert */
    //   assert.fail('Not implemented');
    // });

    // it ('should remove card from deck', (done) => {
    //   /* Arrange */
    //
    //   /* Act / Invoke */
    //
    //   /* Assert */
    //   assert.fail('Not implemented');
    // });
  });
});

/**
 * Represents a deck of cards that can be shuffled or drawn.
 */
class Deck {
  /**
   * The cards contained in the deck.
   */
  #cards = [];

  /**
   * Creates a new instance of Desk.
   * @param {Card[]} cards The optional list of cards to initialize the deck with. Leaving this parameter null will automatically create a standard 52 card desk.
   */
  constructor(cards) {
    this.#cards = this.#create();
  }

  /**
   * Create or opens a brand new deck of cards.
   * @returns {Card[]} The freshly unwrapped deck
   */
  #create() {
    return [
      new Card('♠️', 'A'), new Card('♠️', '2'), new Card('♠️', '3'), new Card('♠️', '4'), new Card('♠️', '5'), 
      new Card('♠️', '6'), new Card('♠️', '7'), new Card('♠️', '8'), new Card('♠️', '9'), new Card('♠️', '10'), 
      new Card('♠️', 'J'), new Card('♠️', 'Q'), new Card('♠️', 'K'),

      new Card('♥️', 'A'), new Card('♥️', '2'), new Card('♥️', '3'), new Card('♥️', '4'), new Card('♥️', '5'), 
      new Card('♥️', '6'), new Card('♥️', '7'), new Card('♥️', '8'), new Card('♥️', '9'), new Card('♥️', '10'), 
      new Card('♥️', 'J'), new Card('♥️', 'Q'), new Card('♥️', 'K'),

      new Card('♣️', 'A'), new Card('♣️', '2'), new Card('♣️', '3'), new Card('♣️', '4'), new Card('♣️', '5'), 
      new Card('♣️', '6'), new Card('♣️', '7'), new Card('♣️', '8'), new Card('♣️', '9'), new Card('♣️', '10'), 
      new Card('♣️', 'J'), new Card('♣️', 'Q'), new Card('♣️', 'K'),

      new Card('♦️', 'A'), new Card('♦️', '2'), new Card('♦️', '3'), new Card('♦️', '4'), new Card('♦️', '5'), 
      new Card('♦️', '6'), new Card('♦️', '7'), new Card('♦️', '8'), new Card('♦️', '9'), new Card('♦️', '10'), 
      new Card('♦️', 'J'), new Card('♦️', 'Q'), new Card('♦️', 'K'),
    ];
  }

  /**
   * Shuffles the cards in the deck.
   */
  shuffle() {
    this.#cards.forEach((card,index) => {
      let position = Math.floor(Math.random() * this.#cards.length);
      if (position !== index) {
        let cardToSwap = this.#cards[position];
        this.#cards[position] = card;
        this.#cards[index] = cardToSwap;
      }
    });
  }

  /**
   * Allows for the entire desk of cards to be inspected or viewed.
   * @returns {Card[]} The current cards contained in the deck.
   */
  peek() {
    return this.#cards
  }

  /**
   * Removes the card from the top of the deck. If no cards are available, then null is returned.
   * @returns {Card} The card at the top of the deck, otherwise returns null.
   */
  draw() {
    /* code here */
  }

  /**
   * Returns the string representation of the object.
   * @returns {String} The string representation of the object
   */
   toString() {
    /* code here */
  }
}

module.exports = Deck;