//Load DOM Content
document.addEventListener('DOMContentLoaded', function () {
    let buttons = document.getElementsByClassName('modal-button');

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute('data-type') === 'gauge') {
                modalGauge.style.display = 'block';
            } else {
                let calcOption = this.getAttribute("data-type");
                alert(`You clicked ${calcOption}`);
            }
        });
    }
});

let userSwatchStitches;
let userSwatchRows;
let numberOfStitchesPerCm;
let numberOfRowsPerCm;
let numberOfStitchesToCastOn;
let desiredWidth;
let desiredLength;
let skeinLength;
let rowsToKnit;
//let stitchesToCastOn;
let currentStitches;
let stitchesToIncreaseDecrease;
let evenlyToIncreseDecrease;

const modalGauge = document.getElementById('modal-gauge');
const modalCastOn = document.getElementById('modal-cast-on');
const modalYarn = document.getElementById('modal-yarn');
const modalIncreseDecrease = document.getElementById('modal-increase-decrease');

function closeModal() {
    modal.style.display = 'none';
};

//Swatch calculation for gauge
//Function does not work
function calcGauge() {
    stitchesPerCm;
    rowsPerCm;
};

function stitchesPerCm() {
    userSwatchStitches = document.getElementById('user-swatch-stitches').value;
    numberOfStitchesPerCm = userSwatchStitches / 10;
    document.getElementById('user-stitches-per-cm').innerHTML = numberOfStitchesPerCm;
};

function rowsPerCm() {
    userSwatchRows = document.getElementById('user-swatch-rows').value;
    numberOfRowsPerCm = userSwatchRows / 10;
    document.getElementById('user-rows-per-cm').innerHTML = numberOfRowsPerCm;
};

btnCalcGauge = document.getElementById('btn-calc-gauge');
btnCalcGauge.addEventListener('click', calcGauge);

//Calculate cast-on stitches
function calcCastOn() {
    calcStitchesToCastOn;
    calcRowsToKnit;
}

function calcStitchesToCastOn() {
    desiredWidth = document.getElementById('desired-width').value;
    numberOfStitchesToCastOn = desiredWidth * numberOfStitchesPerCm;
    document.getElementById('stitches-to-cast-on').innerHTML = numberOfStitchesToCastOn;
};

function calcRowsToKnit() {
    desiredLength = document.getElementById('desired-length').value;
    numberOfRowsToKnit = desiredLength * numberOfRowsPerCm;
    document.getElementById('rows-to-knit').innerHTML = numberOfRowsToKnit;
};

//Not working
btnCalcCastOn = document.getElementById('btn-calc-cast-on');
btnCalcCastOn.addEventListener('click', calcCastOn);

//Calculate total number of skeins needed
function calcTotalStitchesInMeter() {
    stitchesToCastOn = document.getElementById('rows-to-knit').value;
    rowsToKnit = document.getElementById('stitches-to-cast-on').value;
    totalStitches = stitchesToCastOn * rowsToKnit;
    document.getElementById('project-yarn-length').innerHTML = totalStitches/1000;
};

function calcNumberOfSkeins() {
    totalStitches = document.getElementById('project-yarn-length').value;
    skeinLength = document.getElementById('skein-length').value;
    numberOfSkeins = totalStitches / skeinLength;
    document.getElementById('number-of-skeins').innerHTML = numberOfSkeins;    
};

//returns NaN
btnCalcYarn = document.getElementById('btn-calc-yarn');
btnCalcYarn.addEventListener('click', calcNumberOfSkeins);

//Calculate how to increase or decrease - WORKS
function calcIncreseDecrease() {
    currentStitches = document.getElementById('current-stitch-count').value;
    stitchesToIncreaseDecrease = document.getElementById('stitches-to-increase-decrease').value;
    evenlyToIncreseDecrease = currentStitches / stitchesToIncreaseDecrease;
    document.getElementById('evenly-increase-decrease').innerHTML = evenlyToIncreseDecrease;
};

btnCalcIncreseDecrease = document.getElementById('btn-calc-increase-decrease');
btnCalcIncreseDecrease.addEventListener('click', calcIncreseDecrease);








