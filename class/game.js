
module.exports = function Game(){

   this.deck = [];
   this.discard = [];
   this.players = [];
   this.dispenser = -1;
   this.positions = [];


   this.shuffle = function(){};
   this.dispense = function(amount){};
   this.cut = function(){};
   this.retrieveCards = function(){};
   this.play = function(card, player){};

};
