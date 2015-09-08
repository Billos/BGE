module.exports = function Game(name, cardsType){

   var Deck = require('./deck/'+cardsType);

   this.name = name;
   this.deck = [];
   this.discard = [];
   this.players = [];
   this.dispenser = -1;
   this.positions = [];

   this.generateDeck = function(){
      var generator = new Deck();
      this.deck = generator.generateDeck();
   };

   this.shuffle = function(){
      require('shuffle-array')(this.deck);
   };

   this.dispense = function(amount){
      for (var i = 0; i < amount && this.deck.length > 0; i++) {
         var j = this.dispenser+1;
         for (var j = this.dispenser+1; j < this.players.length; j++) {
            this.players[j].cards.push(this.deck.pop());
         }
         for (j = 0; j <= this.dispenser; j++) {
            this.players[j].cards.push(this.deck.pop());
         }
      }
   };

   this.cut = function(){

      var rand = Math.floor((Math.random() * this.deck.length) + 1);

      console.log(rand)
      for (var i = 0; i < rand; i++) {
         var tmp = this.deck.shift();
         this.deck.push(tmp);
      }
   };

   this.retrieveCards = function(){
      this.deck = this.discard;
      this.discard = [];
   };
   this.play = function(card, player){};

};
