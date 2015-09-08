// Dependencies
var http = require('http');
var Server = require('./class/server.js');
var server = new Server();
var Player = require('./class/player.js');

// Variables
var game = server.createGame("Tock", "fiftytwo");
game.generateDeck();
game.dispenser = 0;
game.shuffle();

var p1 = server.addPlayer("Brebre");
var p2 = server.addPlayer("Jude");
var p3 = server.addPlayer("Gael");
var p4 = server.addPlayer("Kiki");

server.assignPlayer(p1, game);
server.assignPlayer(p2, game);
server.assignPlayer(p3, game);
server.assignPlayer(p4, game);

console.log(game.deck);
game.cut();
console.log(game.deck);
