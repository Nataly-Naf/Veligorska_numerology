// Получение элементов
const offerSection = document.getElementById('offer-section');
const openButton = document.getElementById('offer-open-button');
const closeButton = document.getElementById('offer-close-button');

// Открытие секции
openButton.addEventListener('click', () => {
    offerSection.style.display = 'block';
});

// Закрытие секции
closeButton.addEventListener('click', () => {
    offerSection.style.display = 'none';
});

// Закрытие при клике вне модального окна
offerSection.addEventListener('click', (event) => {
    if (event.target === offerSection) {
        offerSection.style.display = 'none';
    }
});
