const chai = require("chai");
const assert = chai.assert;
const expect = chai.expect;
const Suits = require('./Suits');
const Faces = [ 'A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K' ];

// Card {
//   property suit;
//   property face;  
//
//   ctor(suit, face);
// 
//   function getValue();
//   function toString();
// }


describe('Card', () => {
  describe('#constructor', () => {
    it ('should take a suit and value', () => {
       /* Arrange */
      let expectedSuit = '♣'
      let expectedFace = '2'
       /* Act / Invoke */
        let card = new Card(expectedSuit, expectedFace)
       /* Assert */
       expect(card.suit).to.equal(expectedSuit);
       expect(card.face).to.equal(expectedFace);
    });
  });

    it ('should throw error if no parameters provided', () => {
      /* arrange */
      /* act / invoke */
      /* assert */
     expect(() => {
      let card = new Card();
      }).to.throw(Error);
     });

    it ('should throw error if suit is not valid', () => {
       /* arrange */
    
     /* act / invoke */
    
      /* assert */
      expect(() => {
        let card = new Card('', 'J')
      }).to.throw(Error);
     });

   it ('should throw Error if face is not valid', () => {
    /* Arrange */
    
      /* Act / Invoke */
      /* Assert */
      expect(() => {
        let card = new Card('♣', '')
      })
     });
  });
  describe('#toString', () => {
    it ('should return suit and card face', () => {
     /* Arrange */
      let expectedSuit = '♣';
      let expectedFace = 'Q';
      let expectedString = suit + face;
      let card = new Card(suit, face);
     /* Act / Invoke */
      let actualString = card.toString();

      /* Assert */
      expect(actualString).to.equal(expectedString);
   });
  });
  

/**
 * Represents a standard playing card.
 */0
class Card {
  /**
   * Creates a new player card.
   * @param {String} suit The suit of the card. Accepted values: '♠', '♥', '♣', '♦'
   * @param {String} face The face or value of the card. Accepted values: 'A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'
   */
  constructor(suit, face) {
    if (Suits.indexOf(suit) === -1) {
      throw new error(`Invalid suit specified. Valid values are: ${Suits.join(',') }`)
    }
    if (Faces.indexOf(face) === -1) {
      throw new erroe (`Invalid card / face specified. Valid values are: ${Faces.join(',')}`)
    }
   this.suit = suit;
   this.face = face;
  }

  /**
   * Calculates the value of the specified card.
   * @returns The value of the specified card.
   */
  getValue() {
    switch(this.face) {
      case 'A':
        return 14;
      case 'K':
        return 13;
      case 'Q':
        return 12;
      case 'J':
        return 11;
      default:
        let value = parseInt(this.face, 10);
        if (value) {
          return value;
        }
        return 0;
    }
  }

  /**
   * Returns the string representation of the object.
   * @returns {String} The string representation of the object
   */
  toString() {
   return `${ this.suit }${ this.face }`;
  }
}

module.exports = {
  Card : Card,
  Faces : Faces
};