
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

    smilyFaceStefan(smStefan.x, smStefan.y);
    smileyFaceVlad(smVlad.x, smVlad.y);
    smilyFaceFilip(smFilipX, smFilipY);
}
//tot ce e pana aici las, restul sterg
