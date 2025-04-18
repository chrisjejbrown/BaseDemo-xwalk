
export default function decorate(block) {
const carousel = block.querySelector('.carousel2');
const items = block.querySelectorAll('.carousel2>div');
const prevButton = block.querySelector('.prev');
const nextButton = block.querySelector('.next');

let currentIndex = 0;

function showItem(index) {
    carousel.style.transform = 'translateX(-${index * 100}%)';
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? items.length - 1 : currentIndex - 1;
    showItem(currentIndex);
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex === items.length - 1) ? 0 : currentIndex + 1;
    showItem(currentIndex);
});

showItem(currentIndex);
}