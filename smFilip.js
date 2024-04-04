let smFilipX = 700;
let smFilipY = 300;

let directionFilipX = 1;

function checkLimitsFilip() {
    if (smFilipX >= tableWidth)
        directionFilipX *= -1;

    smFilipX += directionFilipX;
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