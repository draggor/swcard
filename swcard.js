var 	gnucard = require('./src/nodejs/server'),
//	repl = require('repl'),
	game = require('./src/nodejs/game');

gnucard.startServer(9000);

//spoiler.loadSpoiler();

/*
var r = repl.start();
r.context.spoiler = spoiler;
r.context.game = game;
*/
