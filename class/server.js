var Player = require('./player')
var Game = require('./game')

module.exports = function Server(){

   this.games = [];
   this.players = [];

   this.addPlayer = function(name){
      var player = new Player(name);
      this.players.push(player);
      return player;
   };
   this.rmPlayer = function(name){};

   this.listPlayers = function(){
      console.log("-------------------");
      this.players.forEach(function(e){console.log(e)});
   };

   this.createGame = function(name, type){
      var game = new Game(name, type)
      this.games.push(game);
      return game;
   };
   this.destroyGame = function(name){};

   this.assignPlayer = function(player, game){
      game.players.push(player);
      this.players.pop(player);
   };

   this.start = function(){};
   this.stop = function(){};

};
