
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
    smilyFaceFilip(smFilipX, smFilipY);
    smileyFaceVlad(smVladX, smVladY);
}
//tot ce e pana aici las, restul sterg
