let smVlad = {
    x: 400,
    y: 300,
    directionX: 1,

};

function checkLimitsVlad() {
    if (smVlad.x >= tableWidth || smVlad.x <=0)
        smVlad.directionX *= -1;

    smVlad.x += smVlad.directionX;

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
