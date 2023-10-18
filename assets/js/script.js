const modalLearnMore = document.getElementById('modal-learn-more');

//Load DOM Content
document.addEventListener('DOMContentLoaded', function () {
    let buttons = document.getElementsByTagName('button');
    
    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute('data-type') === 'btn-learn-more') {
                modalLearnMore.style.display = 'block';
            } else {
                let calcOption = this.getAttribute('data-type');
                alert(`You want to calculate ${calcOption}`);
            }
        });
    }
});

let userSwatchStitches;
let userSwatchRows;
let numberOfStitchesPerCm;
let numberOfRowsPerCm;

let btnCalcGauge = document.getElementById('btn-calc-gauge');

//btnCalcGauge.addEventListener('click', calcGauge);

function openModalLearnMore() {
    modalLearnMore.style.display = 'block';
};


function calcGauge() {
    StitchesPerCm;
}

function StitchesPerCm() {
    userSwatchStitches = document.getElementById('swatch-stitches').value;
    numberOfStitchesPerCm = userSwatchStitches / 10;
    document.getElementById('stitches-per-cm').innerHTML = numberOfStitchesPerCm;

}

// General calculations

function multiply(num1, num2) {
    return num1 * num2;
}

function devide(num1, num2) {
    return num1 / num2;
}
