module.exports = function Deck(name, cardsType){

   this.cards = [];
   this.discard = [];

   this.shuffle = function(){
      require('shuffle-array')(this.cards);
   };

   this.cut = function(){

      var rand = Math.floor((Math.random() * this.cards.length) + 1);

      for (var i = 0; i < rand; i++) {
         var tmp = this.cards.shift();
         this.cards.push(tmp);
      }
   };

   this.retrieveCards = function(){
      this.deck = this.discard;
      this.discard = [];
   };

   this.draw = function(){
      return this.cards.pop();
   }

   this.deckSize = function(){
      return this.cards.length;
   }


   this.insert = function(card){
      this.cards.push(card);
   }
   this.putToDiscard = function(card){
      this.discard.push(card);
   }

};
