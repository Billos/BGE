// Dependencies
var http = require('http');
var Server = require('./class/server.js');
var server = new Server();

// Variables
console.log(server)
server.listPlayers();
server.addPlayer("Bob")
server.listPlayers();
server.addPlayer("Marla")
server.listPlayers();
