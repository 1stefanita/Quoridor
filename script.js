
let tableWidth = 800;
let tableHeight = 600;



function setup() {
    createCanvas(tableWidth, tableHeight);
}

function draw() {
    background("black")
    checkLimitsVlad();
    checkLimitsStefan();
    checkLimitsFilip();

    smileyFaceVlad(smVlad.x, smVlad.y);
    smilyFaceStefan(smStefanX, smStefanY);
<<<<<<< HEAD
    smilyFaceFilip(smFilip.x, smFilip.y);
    smileyFaceVlad(smVladX, smVladY);
=======
    smilyFaceFilip(smFilipX, smFilipY);
>>>>>>> 287bbd7c8025ace68fb1adadf7f1cd20f085a345
}
//tot ce e pana aici las, restul sterg
