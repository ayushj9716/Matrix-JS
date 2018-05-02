var streams = [];

function setup() {
	createCanvas(canvasWidth,canvasHeight);
	background(backgroundColor);
	var x = 0;
	for (var i = 0; i <= width/symbolSize; i++) {
		var stream = new Stream();
		stream.generateSymbols(x,random(-1000, 0));
		streams.push(stream);
		x += symbolSize;
	};
	textSize(symbolSize);
}

function draw() {
	background(0,100);
	streams.forEach(function(stream){
		stream.render();
	});
}
