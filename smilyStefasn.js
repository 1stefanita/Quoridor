let smStefanX = 750;
let smStefanY = 100;
let directionStefanX = 1;

function checkLimitsStefan() {
    if (smStefanX >= tableWidth)
        directionStefanX *= -1;
    smStefanX += directionStefanX;

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