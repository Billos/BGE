module.exports = function DeckType(){

   var Card = require('../card.js');
   var Deck = require('../deck.js');

   var colors = ["clubs", "diamonds", "hearts", "spades"];
   var names  = [ "Ace",   "2",  "3",  "4",  "5",  "6",  "7",  "8",  "9",  "10", "Jack",  "Queen", "King"];
   var values = [ 1,       2,    3,    4,    5,    6,    7,    8,    9,    10,   11,      12,      13];

   this.generateDeck = function(){
      var deck = new Deck();
      for (var i = 0; i < colors.length; i++) {
         var color = colors[i];
         for (var j = 0; j < values.length; j++) {
            var name  = names[j];
            var value = values[j];
            deck.insert(new Card(color,name,value));
         }
      }
      return deck;
   }

};
