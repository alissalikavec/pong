var canvas = document.getElementById('table'),
	context = canvas.getContext('2d');

// Paddle
function Paddle( x, y, width, height ) {
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
};

Paddle.prototype.render = function() {
	context.fillStyle = 'white';
	context.fillRect( this.x, this.y, this.width, this.height );
};

// Player
function Player() {
	this.paddle = new Paddle( 10, 10, 20, 280 );
}

Player.prototype.render = function() {
	this.paddle.render();
};


// Computer 
function Computer() {
	this.paddle = new Paddle( 570, 10, 20, 280 );
};

Computer.prototype.render = function() {
	this.paddle.render();
};


// Ball
function Ball( x, y ) {
	this.x = x;
	this.y = y;
	this.radius = 10;
}

Ball.prototype.render = function() {
	context.beginPath();
	context.arc(this.x, this.y, this.radius, 2 * Math.PI, false);
	context.fillStyle = 'white';
	context.fill();
};

// adding elements from constructors
var player = new Player(),
	computer = new Computer(),
	ball = new Ball( 300, 150 );

var render = function(){
	context.fillStyle = '#000000';
	context.fillRect( 0, 0, 600, 300);
	player.render();
	computer.render();
	ball.render();
}

window.addEventListener("load", render);
