
let smVladX = 500;
let smVladY = 200;
let directionVladX = 1;


function checkLimitsVlad() {
    if (smVladX >= tableWidth)
        directionVladX *= -1;

    smVladX += directionVladX;

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
