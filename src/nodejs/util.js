exports.getUniqueId = (function() {
	var id = 0;
	return function() {
		if(arguments[0] === 0) {
			id = 1;
			return 0;
		} else {
			return id++;
		}
	};
})();

exports.shuffle = function(deck) {
	for(var i = 0; i < deck.length; i++) {
		var j = Math.floor(Math.random() * deck.length);
		var tempi = deck[i];
		deck[i] = deck[j];
		deck[j] = tempi;
	}
	return deck;
};

exports.explodeDeck = function(deck) {
	var exploded = [];
	for(var i = 0; i < deck.length; i++) {
		for(var j = 0; j < parseInt(deck[i][0]); j++) {
			exploded.push(deck[i][1]);
		}
	}
	return exploded;
}

exports.delayMap = function(items, callback, delay) {
	var o = new function() {};
	var i = 0;
	var f = function() {
		if(i < items.length) {
			callback(items[i++]);
			return o.id = setTimeout(f, delay);
		}
	};
	o.id = f();
	return o;
}
