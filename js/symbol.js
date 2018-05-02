function Symbol(x, y, speed, first) {
	this.x = x;
	this.y = y;
	this.value;
	this.speed = speed;
	this.first = first;

	this.switchInterval = round(random(2,20));

	this.setToRandomSymbol = function() {
		if (frameCount % this.switchInterval ==0 ) {
			this.value = String.fromCharCode(
				0x30A0 + round(random(0,96))
				// 0x64 + round(random(0,26))
			);
		}
	}

	this.rain = function() {
		this.y = (this.y >= height) ? 0 : this.y += this.speed;
	}
}