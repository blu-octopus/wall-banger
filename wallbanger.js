// JavaScript code for Wall Banger

let score = 0;

// Get the audio element and animation image
const clickSound = document.getElementById("clickSound");
const animationImage = document.getElementById("animationImage");
const scoreDisplay = document.getElementById("score"); // Get the score element

// Preload the audio and ensure it's loaded
clickSound.preload = "auto";
clickSound.load();

// Flag to track if the GIF has played
let gifPlayed = false;

// Array of image sources for animation
const animationImages = [
    "assets/cat1.png",
    "assets/cat2.png",
    "assets/cat3.png",
    // Add more image sources for your animation frames here
];
let currentFrame = 0;

// Click event handler for the game area (hitbox)
document.getElementById("hitbox").addEventListener("click", function() {
    // Debugging: Log a message to check if the click event is triggered
    console.log("Click event triggered");
    
    // Increase score
    score++;
    
    // Debugging: Log the updated score
    console.log("Score:", score);

    // Play the click sound immediately
    clickSound.currentTime = 0;
    clickSound.play();

    // Debugging: Log a message to indicate that the sound is played
    console.log("Click sound played");

    // Hide the image (cat.png) and display the animation frame
    animationImage.style.display = "none";
    animationImage.src = animationImages[currentFrame];
    animationImage.style.display = "block";

    // Increment the frame for the next click
    currentFrame = (currentFrame + 1) % animationImages.length;

    // Update the UI
    scoreDisplay.textContent = score; // Update the score displayed on the webpage

    // Switch back to the image after a delay (0.5 seconds)
    setTimeout(function() {
        // Check if the GIF has played
        if (gifPlayed) {
            // Debugging: Log a message to indicate switching back to the image
            console.log("Switching back to the image (cat.png)");

            // Hide the animation frame and display the initial image
            animationImage.style.display = "none";
            animationImage.src = "assets/cat.png"; // Switch back to the image
            animationImage.style.display = "block";

            // Reset the gifPlayed flag
            gifPlayed = false;

            // Debugging: Log the value of gifPlayed after resetting
            console.log("gifPlayed:", gifPlayed);
        }
    }, 500); // 0.5 seconds in milliseconds
});
