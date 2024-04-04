
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

    smilyFaceFilip(smFilip.x, smFilip.y);
    smilyFaceStefan(smStefan.x, smStefan.y);
    smileyFaceVlad(smVlad.x, smVlad.y);
}
//tot ce e pana aici las, restul sterg
