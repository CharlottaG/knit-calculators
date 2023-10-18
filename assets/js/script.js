//Load DOM Content
document.addEventListener('DOMContentLoaded', function () {
    let buttons = document.getElementsByTagName('button');

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute('data-type') === 'gauge') {
                modal.style.display = 'block';
            } else {
                let calcOption = this.getAttribute("data-type");
                alert(`You clicked ${calcOption}`);
            }
        });
    }
});

const btnCalcGauge = document.getElementById('btn-calc-gauge');
btnCalcGauge.addEventListener('click', calcGauge);

const modal = document.getElementById('modal-gauge');
const btnClose = document.getElementById('close-modal');

//let metric = true;
let userSwatchStitches;
let userSwatchRows;
let numberOfStitchesPerCm;
let numberOfRowsPerCm;
let numberOfStitchesToCastOn;


function closeModal() {
    modal.style.display = 'none';
};

function calcGauge() {
    stitchesPerCm();
    rowsPerCm();
}

function stitchesPerCm() {
    userSwatchStitches = document.getElementById('swatch-stitches').value;
    numberOfStitchesPerCm = userSwatchStitches / 10;
    document.getElementById('stitches-per-cm').innerHTML = numberOfStitchesPerCm;
}

function rowsPerCm() {
    userSwatchRows = document.getElementById('swatch-rows').value;
    numberOfRowsPerCm = userSwatchRows / 10;
    document.getElementById('rows-per-cm').innerHTML = numberOfRowsPerCm;
}

function calcCastOn() {

}

function stitchesToCastOn() {
    desiredWidth = document.getElementById('desired-width').value;
    numberOfStitchesToCastOn = desiredWidth * ;
    document.getElementById('stitches-to-cast-on').innerHTML = numberOfStitchesToCastOn;
}

let btnCalcCastOn = document.getElementById('btn-calc-cast-on');

btnCalcCastOn.addEventListener('click', () => {

    let desiredWidth = document.getElementById('desired-width').value;
    let desiredLength = document.getElementById('desired-length').value;

    calcCastOnStitches(desiredWidth, numberOfStitchesPerCm);
    calcKnitRows(desiredLength, numberOfRowsPerCm);
});


function calcCastOnStitches(desiredWidth, numberOfStitchesPerCm) {
    document.getElementById('stitches-to-cast-on').innerHTML = multiply(desiredWidth, numberOfStitchesPerCm);
}

function calcKnitRows(desiredLength, numberOfRowsPerCm) {
    document.getElementById('rows-to-knit').innerHTML = multiply(desiredLength, numberOfRowsPerCm);
}


// General calculations

function multiply(num1, num2) {
    return num1 * num2;
}

function devide(num1, num2) {
    return num1 / num2;
}
