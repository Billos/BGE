var Client = require('./client')

module.exports = function Server(){

   this.games = [];
   this.players = [];

   this.addPlayer = function(name){
      this.players.push(new Client(name))
   };
   this.rmPlayer = function(name){};
   this.listPlayers = function(){
      console.log("-----")
      this.players.forEach(function(e){console.log(e)});
   };

   this.createGame = function(name){};
   this.destroyGame = function(name){};

   this.assignPlayer = function(player, game){};

   this.start = function(){};
   this.stop = function(){};

};
