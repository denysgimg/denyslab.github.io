// Слайдер
const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let index = 0;

function showSlide(newIndex) {
    if (newIndex < 0) index = images.length - 1;
    else if (newIndex >= images.length) index = 0;
    else index = newIndex;

    slides.style.transform = `translateX(-${index * 100}%)`;
}

prev.addEventListener('click', () => showSlide(index - 1));
next.addEventListener('click', () => showSlide(index + 1));

// Перемикання теми
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    themeToggle.textContent = body.classList.contains('dark-theme')
        ? 'Перемкнути на світлу тему'
        : 'Перемкнути на темну тему';
});
