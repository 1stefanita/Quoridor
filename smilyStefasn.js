let smStefan = {
    x: 750,
    y: 100,
    directionX:1
}




function checkLimitsStefan() {
    if (smStefan.x >= tableWidth || smStefan.x <= 0 )
    smStefan.directionX *= -1;
    smStefan.x += smStefan.directionX;

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