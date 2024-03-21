function setup(){
<<<<<<< HEAD
    createCanvas(800, 600);
    }
    
    function draw(){
        background ("yellow");
    smilyFaceStefan();}
    function smilyFaceStefan(){
        //BODY
        fill("white");
        stroke("black")
       circle (400, 300, 50)
    
       //EYES
       stroke("brown");
       ellipse(390, 290, 10, 5)
       ellipse(410, 290, 10, 5)
       //EYE PUPILS
        stroke("black");
       fill("black");
       circle(390, 290, 2)
       circle(410, 290,2)
    
       //MOUTH
       stroke("green")
       fill("black")
       arc(400, 310, 10, 10, 0, Math.PI )
    
       //CHEEKS
       stroke("pink");
       fill("pink");
       circle(420, 305, 7);
       circle(380, 305, 7);
    }
=======
createCanvas(800, 600);
}

function draw(){
    background ("green");
    smilyFaceFilip();
}

function smilyFaceFilip(){

    //BODY
    fill("white");
    stroke("black")
   circle (400, 300, 50)

   //EYES
   stroke("brown");
   ellipse(390, 290, 10, 5)
   ellipse(410, 290, 10, 5)
   //EYE PUPILS
    stroke("black");
   fill("black");
   circle(390, 290, 2)
   circle(410, 290,2)

   //MOUTH
   stroke("red")
   fill("black")
   arc(400, 310, 10, 10, 0, Math.PI )

   //CHEEKS
   stroke("pink");
   fill("pink");
   circle(420, 305, 7);
   circle(380, 305, 7);
}
>>>>>>> 0f4f32053c8f77aa89c6cf7b65e3034c081c0ba8
