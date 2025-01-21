
const offerSection = document.getElementById('offer-section');
const openButton = document.getElementById('offer-open-button');
const closeButton = document.getElementById('offer-close-button');


openButton.addEventListener('click', () => {
    offerSection.style.display = 'block';
});


closeButton.addEventListener('click', () => {
    offerSection.style.display = 'none';
});


offerSection.addEventListener('click', (event) => {
    if (event.target === offerSection) {
        offerSection.style.display = 'none';
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        offerSection.style.display = 'none';
    }
});

