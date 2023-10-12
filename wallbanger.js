// JavaScript code for Wall Banger

let score = 0;
let isAnimating = false; // Variable to track animation state
const animationDuration = 500; // Animation duration in milliseconds

// Get the audio element
const clickSound = document.getElementById("clickSound");

// Preload the audio and ensure it's loaded
clickSound.preload = "auto";
clickSound.load();

// Click event handler for the game area
document.querySelector(".game-area").addEventListener("click", function() {
    // Debugging: Log a message to check if the click event is triggered
    console.log("Click event triggered.");

    // If not already animating, play the animation
    if (!isAnimating) {
        isAnimating = true;

        // Play the click animation
        const catAnimation = document.getElementById("cat");
        catAnimation.style.backgroundImage = 'url("assets/cat.gif")';

        // After a delay, switch back to the PNG image
        setTimeout(function() {
            catAnimation.style.backgroundImage = 'url("assets/sadge_cat.jpeg")';
            isAnimating = false;
        }, animationDuration);
    }

    // Increase score
    score++;

    // Debugging: Log the updated score
    console.log("Score:", score);

    // Play the click sound immediately
    clickSound.currentTime = 0;
    clickSound.play();

    // Debugging: Log a message to indicate that the sound is played
    console.log("Click sound played.");

    // Update the UI
    document.getElementById("score").textContent = score;
});

// Upgrade button event handler (if you still want it)
document.getElementById("upgradeButton").addEventListener("click", function() {
    if (score >= upgradeCost) {
        // Deduct the upgrade cost
        score -= upgradeCost;
        // Update the UI
        document.getElementById("score").textContent = score;
        // Increase the click power or add an upgrade effect
        // Update the upgrade cost based on your game logic
        upgradeCost *= 2;
    }
});
