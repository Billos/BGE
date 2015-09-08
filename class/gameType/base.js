module.exports = function GameType(){

   var DeckType = require('../cardType/...');

   this.name = "name";
   this.deck = new DeckType().generateDeck();
   this.players = [];
   this.dispenser = -1;
   this.board = [];

   this.dispense = function(amount){
   };

   this.play = function(card, player){

   };

};
