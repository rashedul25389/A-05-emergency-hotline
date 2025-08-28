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

//  Calling Button JS event Handler.
const totalCoin = getElement('total-coin');
const coinPerCall = 20;
const callBtns = document.getElementsByClassName('call-btn');
for (const everyBtn of callBtns) {
    everyBtn.addEventListener('click', function () {
        if (everyBtn) {
            const TotalCoinNumber = Number(totalCoin.innerText);

            if (TotalCoinNumber >= coinPerCall) {
                let currentTotalCoin = TotalCoinNumber - coinPerCall;
                totalCoin.innerText = currentTotalCoin;

                const title =
                    everyBtn.parentNode.parentNode.children[1].children[0]
                        .innerText;
                const subTitle =
                    everyBtn.parentNode.parentNode.children[1].children[1]
                        .innerText;
                const dialNumber =
                    everyBtn.parentNode.parentNode.children[1].children[2]
                        .innerText;

                const now = new Date();
                const timeString = now.toLocaleTimeString('en-US', {
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit',
                });

                alert('📞 Calling ' + subTitle + ' ' + dialNumber + ' . . . .');

                const cartContainer = getElement('call-container');
                const newCart = document.createElement('div');
                newCart.innerHTML = `
                <div
                    class="flex justify-between items-center bg-[#fafafa] py-4 px-2 rounded-[8px] mb-2">
                    <div>
                        <h1
                            class="text-[18px] text-[#111111] font-semibold mb-[2px]">
                            ${title}
                        </h1>
                        <h2
                            class="text-[18px] text-[#5c5c5c] font-normal">
                            ${dialNumber}
                        </h2>
                    </div>
                    <div class="clock">${timeString}</div>
                </div>
                    `;
                cartContainer.append(newCart);
            } else {
                alert(
                    '❌ আপনার পর্যাপ্ত কয়েন নেই! কল করতে কমপক্ষে ২০ কয়েন লাগবে।'
                );
            }
        }
    });
}

// // For Clear the notifications
document.getElementById('btn-clear').addEventListener('click', function () {
    const callContainer = getElement('call-container');
    callContainer.innerHTML = '';
});

// //  Copy Button JS event Handler.
const copyBtns = document.getElementsByClassName('copy-bt');
for (const everyBtn of copyBtns) {
    everyBtn.addEventListener('click', async function () {
        if (everyBtn) {
            const dialNumber =
                everyBtn.parentNode.parentNode.children[1].children[2]
                    .innerText;

            try {
                await navigator.clipboard.writeText(dialNumber);
            } catch (err) {}

            alert('নম্বর কপি হয়েছে : ' + dialNumber);

            const totalCopyNumber = getElement('copy-count').innerText;
            const currentCopyNumber = Number(totalCopyNumber) + 1;
            getElement('copy-count').innerText = currentCopyNumber;
        }
    });
}
