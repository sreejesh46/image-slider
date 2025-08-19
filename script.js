// Array of image paths for the slider
const images = [
  "images/img1.jpeg",
  "images/img2.jpg",
  "images/img3.jpg",
  "images/img4.jpg",
  "images/img5.jpg",
];

// Current index of the displayed image
let currentIndex = 0;
// Slideshow play/pause state
let isPlaying = true;
// Interval ID for automatic slideshow
let intervalId;

// Display the image at the given index and update background
function showSlide(index) {
  const slide = document.getElementById("slide");
  // Fade out
  slide.classList.add("fade-out");
  setTimeout(() => {
    slide.src = images[index];
    // Fade in
    slide.classList.remove("fade-out");
    slide.classList.add("fade-in");
    setTimeout(() => {
      slide.classList.remove("fade-in");
    }, 400);
  }, 400);
  // Update slide counter
  const counter = document.getElementById("slideCounter");
  counter.textContent = `Slide ${index + 1} of ${images.length}`;
}

// Show the next image in the array, looping to the start if at the end
function nextSlide(userTriggered = false) {
  if (userTriggered && isPlaying) {
    stopSlideshow();
  }
  currentIndex = (currentIndex + 1) % images.length;
  showSlide(currentIndex);
}

// Show the previous image in the array, looping to the end if at the start
function prevSlide(userTriggered = false) {
  if (userTriggered && isPlaying) {
    stopSlideshow();
  }
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showSlide(currentIndex);
}

// Start automatic slideshow (next image every 3 seconds)
function startSlideshow() {
  intervalId = setInterval(() => nextSlide(false), 3000);
  document.querySelector(".toggle").textContent = "⏸";
  isPlaying = true;
}

// Stop automatic slideshow
function stopSlideshow() {
  clearInterval(intervalId);
  document.querySelector(".toggle").textContent = "▶";
  isPlaying = false;
}

// Toggle slideshow play/pause state
function toggleSlideshow() {
  if (isPlaying) {
    stopSlideshow();
  } else {
    startSlideshow();
  }
}

// Initialize slider: show first image and start slideshow
showSlide(currentIndex);
startSlideshow();
// Attach user-triggered navigation to buttons
document.querySelector('.next').onclick = () => nextSlide(true);
document.querySelector('.prev').onclick = () => prevSlide(true);
