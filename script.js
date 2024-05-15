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
  
  function pion1(x, y) {
    //Desenat pion1
    fill('blue');
    ellipse(x, y, 30, 30);
}

function pion2(x, y) {
    //Desenat pion2
    fill('Red');
    ellipse(x, y, 30, 30);
}
class Patrat {
    // constructor
    initializare(patrat = null) {
        if (patrat) {
            // daca am primit un patrat
            this.patrat = patrat; //copiaza patratul
        } else {
            // daca nu am primit un patrat
            this.patrat = []; //initializeaza patratul
            for (let r = 0; r < length; r++) {
                //parcurgem patratul
                this.patrat[r] = []; //initializeaza linia
                for (let c = 0; c < length; c++) {
                    //parcurgem linia
                    let valueObj = {
                        //initializeaza valoarea
                        value: "0", //initializeaza valoarea
                        color: "white", //initializeaza culoarea
                    };
                    this.patrat[r][c] = valueObj; //adauga valoarea in linia
                }
            }
        }
    }

afisare(xInit, y) {
        //afiseaza patratul
        let x = xInit;
        for (var r = 0; r < length; r++) {
            x = xInit;
            for (var c = 0; c < length; c++) {
                stroke("black");
                strokeWeight(5);
                fill(this.patrat[r][c].color);
                rect(x, y, cubeSize, cubeSize);
                x += cubeSize + 10; // Add spacing between rectangles
            }
            y += cubeSize + 10; // Add spacing between rows
        }
    }
