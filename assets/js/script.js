//Load DOM Content
document.addEventListener('DOMContentLoaded', function () {
    var buttons = document.getElementsByClassName('modal-button'); //To only call modal opening buttons

    for (var button of buttons) {
        button.addEventListener("click", function () {

            if (this.getAttribute('data-type') === 'gauge') {
                modalGauge.style.display = 'block';
            } else {
                var calcOption = this.getAttribute("data-type");
                switch (calcOption) {
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
                }
            }
        });
    }
});

//Modals
const modalGauge = document.getElementById('modal-gauge');
const modalCastOn = document.getElementById('modal-cast-on');
const modalYarn = document.getElementById('modal-yarn');
const modalIncreseDecrease = document.getElementById('modal-increase-decrease');

//Swatch calculation for gauge
var btnCalcGauge = document.getElementById('btn-calc-gauge');
btnCalcGauge.addEventListener('click', () => {

    var userSwatchStitches = document.getElementById('user-swatch-stitches').value;
    var userSwatchRows = document.getElementById('user-swatch-rows').value;
    var num1 = 10;

    if (userSwatchStitches === '' && userSwatchRows === '') {
        alert('Oops! You need to fill in the numer of stitches and rows first. We need that information in this calculation.');
            } else {
        stitchesPerCm(userSwatchStitches, num1);
        rowsPerCm(userSwatchRows, num1);
            }
});

function stitchesPerCm(userSwatchStitches, num1) {
    document.getElementById('user-stitches-per-cm').innerHTML = divide(userSwatchStitches, num1);
}

function rowsPerCm(userSwatchRows, num1) {
    document.getElementById('user-rows-per-cm').innerHTML = divide(userSwatchRows, num1);
}

//Calculate cast-on stitches
var btnCalcCastOn = document.getElementById('btn-calc-cast-on');
btnCalcCastOn.addEventListener('click', () => {

    var desiredWidth = document.getElementById('desired-width').value;
    var desiredLength = document.getElementById('desired-length').value;
    var numberOfStitchesPerCm = document.getElementById('user-stitches-per-cm').textContent;
    var numberOfRowsPerCm = document.getElementById('user-rows-per-cm').textContent;

    if (parseInt(numberOfStitchesPerCm) === 0 && parseInt(numberOfRowsPerCm) === 0) {
        alert('Oops! You need to complete previous calculation first. We need that result in this calculation.');
    } else if (desiredWidth === '' && desiredLength === '') {
            alert('Oops! You need to fill in the desired width and length first. We need that information in this calculation.');
    } else {
        calcStitchesToCastOn(desiredWidth, numberOfStitchesPerCm);
        calcRowsToKnit(desiredLength, numberOfRowsPerCm);
    }

}
);

function calcStitchesToCastOn(desiredWidth, numberOfStitchesPerCm) {
    document.getElementById('stitches-to-cast-on').innerHTML = multiply(desiredWidth, numberOfStitchesPerCm).toFixed(1);
}

function calcRowsToKnit(desiredLength, numberOfRowsPerCm) {
    document.getElementById('rows-to-knit').innerHTML = multiply(desiredLength, numberOfRowsPerCm).toFixed(1);
}

//Calculate total number of skeins needed
var btnCalcYarn = document.getElementById('btn-calc-yarn');
btnCalcYarn.addEventListener('click', () => {

    var stitchesToCastOn = document.getElementById('stitches-to-cast-on').textContent;
    var rowsToKnit = document.getElementById('rows-to-knit').textContent;
    var skeinLength = document.getElementById('skein-length').value;
    var totalStitches = multiply(stitchesToCastOn, rowsToKnit);
    var totalYarn = multiply(totalStitches, 2);
    var totalYarnPerMeter = divide(totalYarn, 100);
    var numberOfSkeins = divide(totalYarnPerMeter, skeinLength);

    if (parseInt(stitchesToCastOn) === 0 && parseInt(rowsToKnit) === 0) {
        alert('Oops! You need to complete previous calculation first. We need that result in this calculation.');
    } else if (skeinLength === '') {
        alert('Oops! You need to fill in the length of the selected skein. We need that information in this calculation.');
    } else {
        document.getElementById('number-of-skeins').innerHTML = numberOfSkeins.toFixed(1);
    }
}
);

//Calculate how to increase or decrease
var btnCalcIncreseDecrease = document.getElementById('btn-calc-increase-decrease');
btnCalcIncreseDecrease.addEventListener('click', () => {

    var currentStitches = document.getElementById('current-stitch-count').value;
    var stitchesToIncreaseDecrease = document.getElementById('stitches-to-increase-decrease').value;

    if (currentStitches === '' && stitchesToIncreaseDecrease === '') {
    alert('Oops! You need to fill in the current stitch count and the number to increase or decrease first. We need that information in this calculation.');
        } else {
        calcIncreseDecrease(currentStitches, stitchesToIncreaseDecrease);
        }
});

function calcIncreseDecrease(currentStitches, stitchesToIncreaseDecrease) {
    document.getElementById('evenly-increase-decrease').innerHTML = divide(currentStitches, stitchesToIncreaseDecrease).toFixed(1);
}

// General calculations

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

//Close Gauge modal (function used in html)
function closeModalGauge() {
    modalGauge.style.display = 'none';
}

//Close Cast-on modal (function used in html)
function closeModalCastOn() {
    modalCastOn.style.display = 'none';
}

//Close Yarn modal (function used in html)
function closeModalYarn() {
    modalYarn.style.display = 'none';
}

//Close Increase/Decrease modal (function used in html)
function closeModalIncreseDecrease() {
    modalIncreseDecrease.style.display = 'none';
}