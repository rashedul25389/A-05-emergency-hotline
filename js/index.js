function getElement(id) {
    const element = document.getElementById(id);
    return element;
}

// // Heart Number increase
const loveBtns = document.getElementsByClassName('love-btn');
const loveCount = getElement('love-count');
let loveCountNumber = 0;
for (const everyLoveBtn of loveBtns) {
    everyLoveBtn.addEventListener('click', function () {
        loveCountNumber++;
        loveCount.innerText = loveCountNumber;

        everyLoveBtn.classList.add('clicked');
        const heartIcon = everyLoveBtn.querySelector('.fa-heart');
        if (heartIcon) {
            heartIcon.style.color = 'red';
        }
    });
}
