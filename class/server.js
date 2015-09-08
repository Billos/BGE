var Player = require('./player')

module.exports = function Server(){


   this.games = [];
   this.players = [];

   this.addPlayer = function(name){
      var player = new Player(name);
      this.players.push(player);
      return player;
   };

   this.rmPlayer = function(name){

   };

   this.listPlayers = function(){
      console.log("-------------------");
      this.players.forEach(function(e){console.log(e)});
   };

   this.createGame = function(game){
      var GameType = require('./gameType/'+game)
      var game = new GameType(game);
      this.games.push(game);
      return game;
   };
   this.destroyGame = function(name){};

   this.assignPlayer = function(player, game){
      for (var i = 0; i < this.players.length; i++) {
         if(this.players[i] == player){
            game.players.push(player);
            this.players.splice(i,1);
            return true;
         }
      }
      return false;
   };

   this.start = function(){};
   this.stop = function(){};

};
