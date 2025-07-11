const images = [
    'images/img1.jpeg',
    'images/img1.jpeg',
    'images/img1.jpeg',
    'images/img1.jpeg',
    'images/img1.jpeg'
];

let currentIndex = 0;
let isPlaying = true;
let intervalId;

function showSlide(index) {
    const slide = document.getElementById('slide');
    slide.src = images[index];
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showSlide(currentIndex);
}

function startSlideshow() {
    intervalId = setInterval(nextSlide, 3000);
    document.querySelector('.toggle').textContent = '⏸';
    isPlaying = true;
}

function stopSlideshow() {
    clearInterval(intervalId);
    document.querySelector('.toggle').textContent = '▶';
    isPlaying = false;
}

function toggleSlideshow() {
    if (isPlaying) {
        stopSlideshow();
    } else {
        startSlideshow();
    }
}

// Initialize
showSlide(currentIndex);
startSlideshow();
