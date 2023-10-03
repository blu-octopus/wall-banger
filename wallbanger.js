
let score = 0;

// Click event handler for the game area
document.querySelector(".game-area").addEventListener("click", function() {
    // Increase score
    score++;
    
    // Play click sound (if not already playing)
    const clickSound = document.getElementById("clickSound");
    if (clickSound.paused) {
        clickSound.play();
    }

    // Update the UI
    document.getElementById("score").textContent = score;
    // Play click animation (you'll need to add this)
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


// Play click sound when the button is clicked
document.getElementById("clickButton").addEventListener("click", function() {
    // Play the click sound
    playSound("clickSound");
    
    // Increase score
    score++;
    
    // Update the UI
    document.getElementById("score").textContent = score;
    // Play click animation (you'll need to add this)
});

// Function to play an audio element by its ID
function playSound(soundId) {
    const audioElement = document.getElementById(soundId);
    if (audioElement) {
        audioElement.currentTime = 0; // Rewind to the start of the sound
        audioElement.play();
    }
}

