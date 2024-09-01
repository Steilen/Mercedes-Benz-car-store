function toggleActive(element, index) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.classList.remove('active'));

    element.classList.add('active');

    const contents = document.querySelectorAll('.contentvip');
    contents.forEach(content => content.classList.remove('active'));

    document.getElementById(`contentvip-${index}`).classList.add('active');
}

const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');
const slideWidth = slides[0].getBoundingClientRect().width + 20;
let currentIndex = 0;

function updateSlidePosition() {
    track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

function updateControls() {
    if (currentIndex === 0) {
        prevButton.classList.add('hidden');
    } else {
        prevButton.classList.remove('hidden');
    }

    if (currentIndex >= slides.length - 3.5) {
        nextButton.classList.add('hidden');
    } else {
        nextButton.classList.remove('hidden');
    }
}

nextButton.addEventListener('click', () => {
    if (currentIndex < slides.length - 3.5) {
        currentIndex++;
        updateSlidePosition();
        updateControls();
    }
});

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateSlidePosition();
        updateControls();
    }
});

updateControls();
