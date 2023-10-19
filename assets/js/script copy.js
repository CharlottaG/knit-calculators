//Load DOM Content
document.addEventListener('DOMContentLoaded', function () {
    let buttons = document.getElementsByTagName('button');

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute('data-type') === 'learn-more') {
                modalLearnMore.style.display = 'block';
            } else {
                let calcOption = this.getAttribute("data-type");
                alert(`You clicked ${calcOption}`);
            }
        });
    }
});

//switch function for buttons in for loop
switch (button) {
    case 'gauge':
        modalGauge.style.display = 'block';
        break;
    case 'cast-on':
        modalCastOn.style.display = 'block';
        break;
    case 'yarn':
        modalYarn.style.display = 'block';
        break;
    case 'increase-decrease':
        modalIncreseDecrease.style.display = 'block';
        break;
};

//let btnCalcCastOn = document.getElementById('btn-calc-cast-on');

//btnCalcCastOn.addEventListener('click', () => {

//    let desiredWidth = document.getElementById('desired-width').value;
//    let desiredLength = document.getElementById('desired-length').value;

//    calcCastOnStitches(desiredWidth, numberOfStitchesPerCm);
//    calcKnitRows(desiredLength, numberOfRowsPerCm);
//});

//let metric = true;
let userSwatchStitches;
let userSwatchRows;
let numberOfStitchesPerCm;
let numberOfRowsPerCm;
let numberOfStitchesToCastOn;
//let desiredWidth;
//let desiredLength;
//var knitCalcOption = 'gauge'

//const btnCalcGauge = document.getElementById('btn-calc-gauge');
//btnCalcGauge.addEventListener('click', calcGauge);

//Close modal btn
//const btnClose = document.getElementById('close-modal');
//btnClose.addEventListener('click', closeModal);

const modalLearnMore = document.getElementById('modal-learn-more');
const modalCastOn = document.getElementById('modal-cast-on');
const modalGauge = document.getElementById('modal-gauge');
const modalYarn = document.getElementById('modal-yarn');
const modalIncreseDecrease = document.getElementById('modal-increase-decrease');

//switch function for buttons in for loop
switch (button) {
    case 'gauge':
        modalGauge.style.display = 'block';
        break;
    case 'cast-on':
        modalCastOn.style.display = 'block';
        break;
    case 'yarn':
        modalYarn.style.display = 'block';
        break;
    case 'increase-decrease':
        modalIncreseDecrease.style.display = 'block';
        break;
};

function closeModal() {
    modal.style.display = 'none';
};

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

function calcCastOn() {

}

function stitchesToCastOn() {
    desiredWidth = document.getElementById('desired-width').value;
    numberOfStitchesToCastOn = desiredWidth * userSwatchStitches;
    document.getElementById('stitches-to-cast-on').innerHTML = numberOfStitchesToCastOn;
};

//let btnCalcCastOn = document.getElementById('btn-calc-cast-on');

//btnCalcCastOn.addEventListener('click', () => {

//    let desiredWidth = document.getElementById('desired-width').value;
//    let desiredLength = document.getElementById('desired-length').value;

//    calcCastOnStitches(desiredWidth, numberOfStitchesPerCm);
//    calcKnitRows(desiredLength, numberOfRowsPerCm);
//});


function calcCastOnStitches(desiredWidth, numberOfStitchesPerCm) {
    document.getElementById('user-stitches-to-cast-on').innerHTML = multiply(desiredWidth, numberOfStitchesPerCm);
};

function calcKnitRows(desiredLength, numberOfRowsPerCm) {
    document.getElementById('user-rows-to-knit').innerHTML = multiply(desiredLength, numberOfRowsPerCm);
};


// General calculations

function multiply(num1, num2) {
    return num1 * num2;
};

function devide(num1, num2) {
    return num1 / num2;
};

-----

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