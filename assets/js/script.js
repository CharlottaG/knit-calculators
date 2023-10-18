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

let userSwatchStitches;
let userSwatchRows;
let numberOfStitchesPerCm;
let numberOfRowsPerCm;


function closeModal() {
    modal.style.display = 'none';
};

function calcGauge() {
    stitchesPerCm;
    rowsPerCm;
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



// General calculations

function multiply(num1, num2) {
    return num1 * num2;
}

function devide(num1, num2) {
    return num1 / num2;
}
