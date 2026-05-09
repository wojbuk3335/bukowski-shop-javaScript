// Pobieramy elementy
const imageModal = document.getElementById('imageModal');
const enlargedImage = document.getElementById('enlargedImage');
const closeBtn = document.getElementById('closeBtn');

// Pobieramy wszystkie zdjęcia w tabeli
const tableImages = document.querySelectorAll('.table-img');

console.log('Zdjęcia znalezione:', tableImages.length);

// Otwieramy modal po kliknięciu na zdjęcie
tableImages.forEach(img => {
    img.addEventListener('click', function() {
        console.log('Kliknięto na zdjęcie:', this.src);
        enlargedImage.src = this.src;
        imageModal.classList.add('active');
        closeBtn.style.display = 'flex';
    });
});

// Zamykamy modal po kliknięciu na przycisk X
closeBtn.addEventListener('click', function() {
    imageModal.classList.remove('active');
    closeBtn.style.display = 'none';
});

// Zamykamy modal po kliknięciu na tło (poza zdjęciem)
imageModal.addEventListener('click', function(event) {
    if (event.target === imageModal) {
        imageModal.classList.remove('active');
        closeBtn.style.display = 'none';
    }
});

// Zamykamy modal po naciśnięciu ESC
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && imageModal.classList.contains('active')) {
        imageModal.classList.remove('active');
        closeBtn.style.display = 'none';
    }
});