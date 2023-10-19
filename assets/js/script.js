//Load DOM Content
document.addEventListener('DOMContentLoaded', function () {
    let buttons = document.getElementsByClassName('modal-button'); //To only call modal opening buttons

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

//switch function for buttons in for loop
/*switch (button) {
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
};*/

//Modals
const modalGauge = document.getElementById('modal-gauge');
const modalCastOn = document.getElementById('modal-cast-on');
const modalYarn = document.getElementById('modal-yarn');
const modalIncreseDecrease = document.getElementById('modal-increase-decrease');

/*//Open modal
function openModal() {
    document.getElementsByClassName('modal').style.display = 'block';
};

//Close modal
let btnCloseModal = document.getElementsByClassName('close-modal');
btnCloseModal.addEventListener('click', closeModal());

function closeModal() {
    document.getElementsByClassName('modal').style.display = 'none';
};*/

//Swatch calculation for gauge
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

//Calculate cast-on stitches
let btnCalcCastOn = document.getElementById('btn-calc-cast-on');
btnCalcCastOn.addEventListener('click', () => {

    let desiredWidth = document.getElementById('desired-width').value;
    let desiredLength = document.getElementById('desired-length').value;
    let numberOfStitchesPerCm = document.getElementById('user-stitches-per-cm').textContent;
    let numberOfRowsPerCm = document.getElementById('user-rows-per-cm').textContent;

    calcStitchesToCastOn(desiredWidth, numberOfStitchesPerCm);
    calcRowsToKnit(desiredLength, numberOfRowsPerCm);
});

function calcStitchesToCastOn(desiredWidth, numberOfStitchesPerCm) {
    document.getElementById('stitches-to-cast-on').innerHTML = multiply(desiredWidth, numberOfStitchesPerCm);
};

function calcRowsToKnit(desiredLength, numberOfRowsPerCm) {
    document.getElementById('rows-to-knit').innerHTML = multiply(desiredLength, numberOfRowsPerCm);
};

//Calculate total number of skeins needed - 
let btnCalcYarn = document.getElementById('btn-calc-yarn');
btnCalcYarn.addEventListener('click', () => {
    let stitchesToCastOn = document.getElementById('rows-to-knit').textContent;
    let rowsToKnit = document.getElementById('stitches-to-cast-on').textContent;
    let totalStitches = document.getElementById('project-yarn-length').textContent;
    let skeinLength = document.getElementById('skein-length').value;

    calcTotalStitches(stitchesToCastOn, rowsToKnit);
    calcNumberOfSkeins(totalStitches, skeinLength);
});

function calcTotalStitches(stitchesToCastOn, rowsToKnit) {
    document.getElementById('project-yarn-length').innerHTML = multiply(stitchesToCastOn, rowsToKnit);
};

function calcNumberOfSkeins(totalStitches, skeinLength) {
    document.getElementById('number-of-skeins').innerHTML = divide(totalStitches, skeinLength);
};

//Calculate how to increase or decrease
let btnCalcIncreseDecrease = document.getElementById('btn-calc-increase-decrease');
btnCalcIncreseDecrease.addEventListener('click', () => {

    let currentStitches = document.getElementById('current-stitch-count').value;
    let stitchesToIncreaseDecrease = document.getElementById('stitches-to-increase-decrease').value;

    calcIncreseDecrease(currentStitches, stitchesToIncreaseDecrease);

});

function calcIncreseDecrease(currentStitches, stitchesToIncreaseDecrease) {
    document.getElementById('evenly-increase-decrease').innerHTML = divide(currentStitches, stitchesToIncreaseDecrease);
};



// General calculations

function multiply(num1, num2) {
    return num1 * num2;
};

function divide(num1, num2) {
    return num1 / num2;
};







