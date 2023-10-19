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

let userSwatchStitches;
let userSwatchRows;
let numberOfStitchesPerCm;
let numberOfRowsPerCm;
let numberOfStitchesToCastOn;
let desiredWidth;
let desiredLength;


const modalLearnMore = document.getElementById('modal-learn-more');
const modalCastOn = document.getElementById('modal-cast-on');
const modalGauge = document.getElementById('modal-gauge');
const modalYarn = document.getElementById('modal-yarn');
const modalIncreseDecrease = document.getElementById('modal-increase-decrease');

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

function stitchesToCastOn() {
    desiredWidth = document.getElementById('desired-width').value;
    numberOfStitchesToCastOn = desiredWidth * numberOfStitchesPerCm;
    document.getElementById('stitches-to-cast-on').innerHTML = numberOfStitchesToCastOn;
};

function rowsToKnit() {
    desiredLength = document.getElementById('desired-length').value;
    numberOfRowsToKnit = desiredLength * numberOfRowsPerCm;
    document.getElementById('rows-to-knit').innerHTML = numberOfRowsToKnit;
};

