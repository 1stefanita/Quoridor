const length = 9;
var canvasWidth = window.innerWidth - 10;
var canvasHeight = window.innerHeight - 10;
var cubeSize = canvasHeight / 12;
if (canvasWidth < canvasHeight) cubeSize = canvasWidth / 8;
var tableHeightSide = (canvasHeight - cubeSize * 5) / 2;
var tableWidthSide = (canvasWidth - cubeSize * 5) / 2;
var x, y;

var player1Input, player2Input, submitButton;

var player1Name = "";
var player2Name = "";
