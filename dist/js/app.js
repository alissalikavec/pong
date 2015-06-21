(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
	console.log('rendering player paddle..');
	this.paddle.render();
};


// Computer 
function Computer() {
	this.paddle = new Paddle( 570, 10, 20, 280 );
};

Computer.prototype.render = function() {
	console.log('rendering computer paddle..');
	this.paddle.render();
};


// Ball
function Ball( x, y ) {
	this.x = x;
	this.y = y;
	this.radius = 10;
}

Ball.prototype.render = function() {
	console.log('rendering ball..');
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
	console.log('rendering..');
	context.fillStyle = '#000000';
	context.fillRect( 0, 0, 600, 300);
	player.render();
	computer.render();
	ball.render();
}

window.addEventListener("load", render);

},{}]},{},[1]);