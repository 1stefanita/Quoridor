
let tableWidth = 800;
let tableHeight = 600;

let smVladX = 500;
let smVladY = 200;
let directionVladX = 1;

let smStefanX = 750;
let smStefanY = 100;
let directionStefanX = 1;

let smFilipX = 700;
let smFilipY = 300;
let directionFilipX = 1;


function setup() {
    createCanvas(tableWidth, tableHeight);
}

function draw() {
    background("black")
    checkLimitsVlad();
    checkLimitsStefan();
    checkLimitsFilip();

    smilyFaceStefan(smStefanX, smStefanY);
    smilyFaceFilip(smFilipX, smFilipY);
    smileyFaceVlad(smVladX, smVladY);
}

function checkLimitsStefan() {
    if (smStefanX >= tableWidth)
        directionStefanX *= -1;
    smStefanX += directionStefanX;

}

function checkLimitsVlad() {
    if (smVladX >= tableWidth)
        directionVladX *= -1;

    smVladX += directionVladX;

}
function checkLimitsFilip() {
    if (smFilipX >= tableWidth)
        directionFilipX *= -1;

    smFilipX += directionFilipX;

}

function smilyFaceStefan(x, y) {
    //BODY
    fill("white");
    stroke("black")
    circle(x, y, 50)

    //EYES
    stroke("brown");
    ellipse(x - 10, y - 10, 10, 5)
    ellipse(x + 10, y - 10, 10, 5)
    //EYE PUPILS
    stroke("black");
    fill("black");
    circle(x - 10, y - 10, 2)
    circle(x + 10, y - 10, 2)

    //MOUTH
    stroke("green")
    fill("black")
    arc(x, y + 10, 10, 10, 0, Math.PI)

    //CHEEKS
    stroke("pink");
    fill("red");
    circle(x - 15, y + 5, 10);
    circle(x + 15, y + 5, 10);


}

function smilyFaceFilip(x, y) {

    //BODY
    fill("white");
    stroke("black")
    circle(x, y, 50)

    //EYES
    stroke("brown");
    ellipse(x - 10, y - 10, 10, 5);
    ellipse(x + 10, y - 10, 10, 5);
    //EYE PUPILS
    stroke("black");
    fill("black");
    circle(x - 10, y - 10, 2);
    circle(x + 10, y - 10, 2);

    //MOUTH
    stroke("red")
    fill("black")
    arc(x, y + 10, 10, 10, 0, Math.PI)

    //CHEEKS
    stroke("pink");
    fill("pink");
    circle(x + 20, y + 5, 7);
    circle(x - 20, y + 5, 7);
}

function smileyFaceVlad(x, y) {
    //BODY
    fill("purple");
    stroke("red")
    circle(x, y, 50)

    //EYES
    stroke("green");
    ellipse(x - 10, y - 10, 10, 5)
    ellipse(x + 10, y - 10, 10, 5)
    //EYE PUPILS
    stroke("red");
    fill("red");
    circle(x - 10, y - 10, 2)
    circle(x + 10, y - 10, 2)

    //MOUTH
    stroke("green")
    fill("red")
    arc(x, y + 10, 10, 10, 0, Math.PI)

    //CHEEKS
    stroke("pink");
    fill("pink");
    circle(x + 15, y + 5, 7);
    circle(x - 15, y + 5, 7);
}
