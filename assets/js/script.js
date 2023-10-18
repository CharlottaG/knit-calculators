//Load DOM Content
document.addEventListener('DOMContentLoaded', function() {
    let buttons = document.getElementsByTagName('button');

    for (let button of buttons) {
        button.addEventListener('click', function() {
            if (this.getAttribute('data-type') === 'btn-learn-more') {
                alert('You opened Learn more');
            } else {
                let calcOption = this.getAttribute('data-type');
                alert(`You want to calculate ${calcOption}`);
            }
        });
    }
});