
module.exports = function Player(name){

   this.name = name;
   this.cards = [];
   this.pawns = [];
   this.color = "";

   this.give = function(card){
      this.cards.push(card);
   }

};
