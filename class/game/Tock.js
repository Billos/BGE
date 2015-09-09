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


   var description = {
      "1":  {"spawn":true,    "own":true,    "opp":false,   "decomp":false,   "stomp":false, "values":[1,11],  "swap":false,  "target":1},
      "2":  {"spawn":false,   "own":true,    "opp":false,   "decomp":false,   "stomp":false, "values":[2],     "swap":false,  "target":1},
      "3":  {"spawn":false,   "own":true,    "opp":false,   "decomp":false,   "stomp":false, "values":[3],     "swap":false,  "target":1},
      "4":  {"spawn":false,   "own":true,    "opp":false,   "decomp":false,   "stomp":false, "values":[-4],    "swap":false,  "target":1},
      "5":  {"spawn":false,   "own":false,   "opp":true,    "decomp":false,   "stomp":false, "values":[5],     "swap":false,  "target":1},
      "6":  {"spawn":false,   "own":true,    "opp":false,   "decomp":false,   "stomp":false, "values":[6],     "swap":false,  "target":1},
      "7":  {"spawn":false,   "own":true,    "opp":false,   "decomp":true,    "stomp":false, "values":[7],     "swap":false,  "target":"x"},
      "8":  {"spawn":false,   "own":true,    "opp":false,   "decomp":false,   "stomp":false, "values":[8],     "swap":false,  "target":1},
      "9":  {"spawn":false,   "own":true,    "opp":false,   "decomp":false,   "stomp":false, "values":[9],     "swap":false,  "target":1},
      "10": {"spawn":false,   "own":true,    "opp":false,   "decomp":false,   "stomp":false, "values":[10],    "swap":false,  "target":1},
      "J":  {"spawn":false,   "own":true,    "opp":true,    "decomp":false,   "stomp":false, "values":[0],     "swap":true,   "target":2},
      "Q":  {"spawn":false,   "own":true,    "opp":false,   "decomp":false,   "stomp":false, "values":[12],    "swap":false,  "target":1},
      "K":  {"spawn":true,    "own":true,    "opp":false,   "decomp":false,   "stomp":true,  "values":[13],    "swap":false,  "target":1},
   };

   this.play = function(card, player){};

   // Verifications
   this.canSpawn = function(player){};
   this.isValid = function(action){};
   this.canControlPawn = function(player, pawn){};


};
