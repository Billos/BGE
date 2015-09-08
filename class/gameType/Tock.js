module.exports = function GameType(){

   var DeckType = require('../cardType/fiftytwo.js');

   this.name = "Tock";
   this.deck = new DeckType().generateDeck();
   this.players = [];
   this.dispenser = 0;
   this.board = [];

   this.dispense = function(amount){
      for (var i = 0; i < amount && this.deck.deckSize() > 0; i++) {

         var j = this.dispenser+1;
         for (j = this.dispenser+1; j < this.players.length; j++) {
            this.players[j].give(this.deck.draw());
         }
         for (j = 0; j <= this.dispenser; j++) {
            this.players[j].give(this.deck.draw());
         }
      }
   };


   this.play = function(card, player){};

};
