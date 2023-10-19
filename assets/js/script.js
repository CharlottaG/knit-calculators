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

let numberOfStitchesPerCm;
let numberOfRowsPerCm;
let numberOfStitchesToCastOn;
let skeinLength;
let rowsToKnit;
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

//Swatch calculation for gauge - OK
let btnCalcGauge = document.getElementById('btn-calc-gauge');
btnCalcGauge.addEventListener('click', () => {

    let userSwatchStitches = document.getElementById('user-swatch-stitches').value;
    let userSwatchRows = document.getElementById('user-swatch-rows').value;
    let num1 = 10;

    stitchesPerCm(userSwatchStitches, num1);
    rowsPerCm(userSwatchRows, num1);
});

function stitchesPerCm(userSwatchStitches, num1) {
    document.getElementById('user-stitches-per-cm').innerHTML = divide(userSwatchStitches, num1);
};

function rowsPerCm(userSwatchRows, num1) {
    document.getElementById('user-rows-per-cm').innerHTML = divide(userSwatchRows, num1);
};


//Calculate cast-on stitches - Returns NaN
let btnCalcCastOn = document.getElementById('btn-calc-cast-on');
btnCalcCastOn.addEventListener('click', () => {

    let desiredWidth = document.getElementById('desired-width').value;
    let desiredLength = document.getElementById('desired-length').value;

    calcStitchesToCastOn(desiredWidth, numberOfStitchesPerCm);
    calcRowsToKnit(desiredLength, numberOfRowsPerCm);
});

function calcStitchesToCastOn(desiredWidth, numberOfStitchesPerCm) {
    document.getElementById('stitches-to-cast-on').innerHTML = multiply(desiredWidth, numberOfStitchesPerCm);
};

function calcRowsToKnit(desiredLength, numberOfRowsPerCm) {
    document.getElementById('rows-to-knit').innerHTML = multiply(desiredLength, numberOfRowsPerCm);
};

//Calculate total number of skeins needed - returns NaN
let btnCalcYarn = document.getElementById('btn-calc-yarn');
btnCalcYarn.addEventListener('click', calcNumberOfSkeins);

function calcTotalStitchesInMeter() {
    stitchesToCastOn = document.getElementById('rows-to-knit').value;
    rowsToKnit = document.getElementById('stitches-to-cast-on').value;
    totalStitches = stitchesToCastOn * rowsToKnit;
    document.getElementById('project-yarn-length').innerHTML = totalStitches / 1000;
};

function calcNumberOfSkeins() {
    totalStitches = document.getElementById('project-yarn-length').value;
    skeinLength = document.getElementById('skein-length').value;
    numberOfSkeins = totalStitches / skeinLength;
    document.getElementById('number-of-skeins').innerHTML = numberOfSkeins;
};



//Calculate how to increase or decrease - WORKS
function calcIncreseDecrease() {
    currentStitches = document.getElementById('current-stitch-count').value;
    stitchesToIncreaseDecrease = document.getElementById('stitches-to-increase-decrease').value;
    evenlyToIncreseDecrease = currentStitches / stitchesToIncreaseDecrease;
    document.getElementById('evenly-increase-decrease').innerHTML = evenlyToIncreseDecrease;
};

let btnCalcIncreseDecrease = document.getElementById('btn-calc-increase-decrease');
btnCalcIncreseDecrease.addEventListener('click', calcIncreseDecrease);

// General calculations

function multiply(num1, num2) {
    return num1 * num2;
};

function divide(num1, num2) {
    return num1 / num2;
};







