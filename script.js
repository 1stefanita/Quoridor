function setup(){
createCanvas(800, 600);
}
function draw(){
    background("green");
    smileyFaceVlad();
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
    
}