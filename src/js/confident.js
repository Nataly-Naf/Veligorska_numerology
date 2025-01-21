
const confidentSection = document.getElementById('confident-section');
const openButton = document.getElementById('confident-open-button');
const closeButton = document.getElementById('confident-close-button');


openButton.addEventListener('click', () => {
    confidentSection.style.display = 'block';
});


closeButton.addEventListener('click', () => {
    confidentSection.style.display = 'none';
});

confidentSection.addEventListener('click', (event) => {
    if (event.target === confidentSection) {
        confidentSection.style.display = 'none';
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        confidentSection.style.display = 'none';
    }
});
