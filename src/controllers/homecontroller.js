let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel img');
    slides.forEach((slide, i) => {
        slide.classList.add('hidden');
        if (i === index) {
            slide.classList.remove('hidden');
        }
    });
}

function nextSlide() {
    const slides = document.querySelectorAll('.carousel img');
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    const slides = document.querySelectorAll('.carousel img');
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
});