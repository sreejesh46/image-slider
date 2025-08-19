# Image Slider Project

## Description
This project is a responsive image slider (carousel) built with HTML, CSS, and JavaScript. It displays a series of images with navigation buttons and an automatic slideshow feature. The slider is visually appealing, works on desktop and mobile devices, and provides smooth transitions between images.

## Features
- Display 5 images in a slider
- Next and Previous navigation buttons
- Automatic slideshow (changes image every 3 seconds)
 - Play/Pause button to control slideshow
 - Keyboard controls:
	 - Right Arrow: Next slide
	 - Left Arrow: Previous slide
	 - Spacebar: Play/Pause slideshow
 - Smooth fade transition between images
 - Responsive design (fits any screen size)
 - Pauses slideshow when user navigates manually

## How to Run
1. Download or clone the project files.
2. Place your images in the `images/` folder and update the image paths in `script.js` if needed.
3. Open `index.html` in your web browser.

## Usage
- Click the **Next** or **Previous** buttons to manually navigate through images.
- Click the **Play/Pause** button to start or stop the automatic slideshow.
- The slider will loop back to the first image after the last one.
- The slideshow will pause if you manually navigate.

## Project Structure
```
image slider/
├── index.html
├── styles.css
├── script.js
├── images/
│   ├── img1.jpeg
│   ├── img2.jpg
│   ├── img3.jpg
│   ├── img4.jpg
│   └── img5.jpg
```

## Customization
- You can add more images to the array in `script.js`.
- Adjust the transition speed or style in `styles.css`.
- Change the layout or button styles as desired.

## Credits
Created by sreejesh46 for the Unified Mentor web development project.

## License
This project is for educational purposes.
