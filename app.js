// Dependencies
var http = require('http');
var Server = require('./class/server.js');
var Player = require('./class/player.js');

// Variables
var server = new Server();
var game = server.createGame("Tock");
game.deck.shuffle();
game.deck.cut();

server.assignPlayer(server.addPlayer("Brebre"), game);
server.assignPlayer(server.addPlayer("Kiki"), game);
server.assignPlayer(server.addPlayer("Flo"), game);
server.assignPlayer(server.addPlayer("Gael"), game);
