var util = require('./util');

var games = {}
var namesToPlayers = {};
var clientsToGames = {};

exports.games = games;
exports.namesToPlayers = namesToPlayers;
exports.clientsToGames = clientsToGames;

function Player(name, pass) {
	this.name = name;
	this.pass = pass;
}

exports.Player = Player;

function Game(name, pass, admin) {
	this.self = this;
	this.admin = admin;
	this.name = name;
	this.pass = pass;
	this.deck = getNewDeck();
	this.namesToCards = {};
	this.clientsToPlayers = {};
	this.clientsToClients = {};
	this.namesToClients = {};
}

Game.prototype.remove = function(name) {
	var	c = this.namesToClients[name],
		p = this.clientsToPlayers[c];

	delete this.namesToClients[name];
	delete this.clientsToClients[c];
	delete this.clientsToPlayers[c];
	delete this.namesToCards[name];

	return [c, p];
};

Game.prototype.clients = function() {
	var self = this;
	return Object.keys(this.clientsToClients).map(function(c) {
		return self.clientsToClients[c];
	});
};


Game.prototype.reset = function() {
	this.deck = getNewDeck();
	for(k in this.namesToCards) {
		this.namesToCards[k] = [];
	}
};

function getNewDeck() {
	var a = [];
	for(var i = 1; i <= 54; i++) {
		a.push(i);
	}
	return util.shuffle(a);
}

exports.Game = Game;

function reset() {
	games = {};
	clientsToPlayers = {};
	namesToPlayers = {};
}

exports.reset = reset;
