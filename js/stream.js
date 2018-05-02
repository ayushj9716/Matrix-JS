function Stream () {
	this.symbols = [];
	this.totalSymbols = round(random(minTotalSymbols, maxTotalSymbols));
	this.speed = random(minSpeed, maxSpeed);

	this.generateSymbols = function(x,y) {
		var first = round(random(0, 4)) == 1;
		for (var i = 0; i < this.totalSymbols; i++) {
			symbol = new Symbol(x, y, this.speed, first);
			symbol.setToRandomSymbol();
			this.symbols.push(symbol);
			y -= symbolSize;
			first = false;
		};
	}

	this.render = function() {
		this.symbols.forEach(function(symbol){
			if (symbol.first) {
				fill(180,255,180);
				// fill(255,180,180);
			}else{
				fill(0, 255, 70);
				// fill(255, 0, 0);
			}
			text(symbol.value,symbol.x,symbol.y);
			symbol.rain();
			symbol.setToRandomSymbol();
		});
	}
}