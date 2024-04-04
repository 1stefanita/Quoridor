
let smFilip = {
    x: 700,
    y: 300,
    directionX:1,
    directionY:1,
    speedX: 33,
    speedY: 13,
}

function checkLimitsFilip() {
    //verificare pe dreapta+stanga
    if (smFilip.x >= tableWidth || smFilip.x <=0) smFilip.directionX *= -1;
        smFilip.x += smFilip.directionX * smFilip.speedX ;

    //verificare pe jos+sus
    if (smFilip.y >= tableWidth || smFilip.y <=0) smFilip.directionY *= -1;
    smFilip.y += smFilip.directionY * smFilip.speedY ;
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