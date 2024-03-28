

let smStefanX=400;
let smStefanY=300;
let drectionX = 1;

let tableWidth = 800;
let tableHeight = 600;

let smVladX = 400;
let smVladY = 300;


let directionX = 1;
function setup() {
    createCanvas(tableWidth, tableHeight);
}


function draw() {
    background("black");
    
    checkLimitsStefan();

    smilyFaceStefan(smStefanX, smStefanY);
    smilyFaceFilip(250,150);
    smileyFaceVlad(450,200); 

 
}

function checkLimitsStefan(x,y){
    if(smStfanX >= 800) 
        directionX *= -1;
    smStefanX+= directionX;
    }

    checkLimitsSMVlad();

    smilyFaceStefan(400,300);
    smilyFaceFilip(250,150);
    smileyFaceVlad(smVladX,  smVladY); 
 


function checkLimitsSMVlad() 
{
    if(smVladX >= tableWidth) 
    directionX *= -1;

    smVladX += directionX;

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

function smilyFaceFilip(x, y) {

    //BODY
    fill("white");
    stroke("black")
    circle(x,y, 50)

    //EYES
    stroke("brown");
    ellipse(x-10, y-10, 10, 5);
    ellipse(x+10, y-10, 10, 5);
    //EYE PUPILS
    stroke("black");
    fill("black");
    circle(x-10, y-10, 2);
    circle(x+10, y-10, 2);

    //MOUTH
    stroke("red")
    fill("black")
    arc(x, y+10, 10, 10, 0, Math.PI)

    //CHEEKS
    stroke("pink");
    fill("pink");
    circle(x+20, y+5, 7);
    circle(x-20, y+5, 7);
}

function smileyFaceVlad(x, y) {
    //BODY
    fill("purple");
    stroke("red")
    circle(x, y, 50)

    //EYES
    stroke("green");
    ellipse(x-10, y-10, 10, 5)
    ellipse(x+10, y-10, 10, 5)
    //EYE PUPILS
    stroke("red");
    fill("red");
    circle(x-10, y-10, 2)
    circle(x+10, y-10, 2)

    //MOUTH
    stroke("green")
    fill("red")
    arc(x, y+10, 10, 10, 0, Math.PI)

    //CHEEKS
    stroke("pink");
    fill("pink");
    circle(x+15, y+5, 7);
    circle(x-15, y+5, 7);
}
