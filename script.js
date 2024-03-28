function setup() {
    createCanvas(800, 600);
}

function draw() {
    background("black");
        smilyFaceStefan(400,300);
    smilyFaceFilip();
    smileyFaceVlad(); 
}

function smilyFaceStefan(x,y) {
    //BODY
    fill("white");
    stroke("black")
    circle(x, y, 50)

    //EYES
    stroke("brown");
    ellipse(x-10, y-10, 10, 5)
    ellipse(x+10, y-10, 10, 5)
    //EYE PUPILS
    stroke("black");
    fill("black");
    circle(x-10, y-10, 2)
    circle(x+10, y-10, 2)

    //MOUTH
    stroke("green")
    fill("black")
    arc(x, y+10, 10, 10, 0, Math.PI)

    //CHEEKS
    stroke("pink");
    fill("red");
    circle(x-15, y+5, 10);
    circle(x+15, y+5, 10);
    
    
}

function smilyFaceFilip() {

    //BODY
    fill("white");
    stroke("black")
    circle(400, 300, 50)

    //EYES
    stroke("brown");
    ellipse(390, 290, 10, 5)
    ellipse(410, 290, 10, 5)
    //EYE PUPILS
    stroke("black");
    fill("black");
    circle(390, 290, 2)
    circle(410, 290, 2)

    //MOUTH
    stroke("red")
    fill("black")
    arc(400, 310, 10, 10, 0, Math.PI)

    //CHEEKS
    stroke("pink");
    fill("pink");
    circle(420, 305, 7);
    circle(380, 305, 7);
}

function smileyFaceVlad() {
    circle(400, 300, 50);

    stroke("black")
    circle(400,300,50);

    stroke("brown");
    ellipse(390,290,10,5);
    ellipse(410,290,10,5);
    circle(390,290,2);
    circle(410,290,2);
    stroke("green")
    fill("black")
    arc(400, 310, 10, 10, 0, Math.PI)

    //CHEEKS
    stroke("pink");
    fill("pink");
    circle(420, 305, 7);
    circle(380, 305, 7);
    
}
