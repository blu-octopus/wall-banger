// JavaScript code for Wall Banger

let score = 0;
let isAnimating = false; // Variable to track animation state
const animationDuration = 100; // Animation duration in milliseconds
let skinCounter = 0; // Initial skin counter
const upgradeThreshold = 10; // Score threshold for upgrading
let canUpgrade = false; // Variable to track if an upgrade is available

// Get the audio element
const clickSound = document.getElementById("clickSound");

// Preload the audio and ensure it's loaded
clickSound.preload = "auto";
clickSound.load();

// Function to check if the button can be upgraded
function checkUpgradability() {
    canUpgrade = score >= upgradeThreshold;

    // Update the button's appearance based on upgradability
    const upgradeButton = document.getElementById("upgradeButton");
    if (canUpgrade) {
        upgradeButton.style.backgroundColor = "#4CAF50"; // Green color when upgradable
        upgradeButton.style.pointerEvents = "auto"; // Make it clickable
    } else {
        upgradeButton.style.backgroundColor = "#ccc"; // Grayed out when not upgradable
        upgradeButton.style.pointerEvents = "none"; // Disable click events
    }
}

// Click event handler for the game area
document.querySelector(".game-area").addEventListener("click", function() {
    // Debugging: Log a message to check if the click event is triggered
    console.log("Click event triggered.");

    // If not already animating, play the animation
    if (!isAnimating) {
        isAnimating = true;

        // Play the click animation
        const catAnimation = document.getElementById("cat");
        catAnimation.style.backgroundImage = `url("assets/cat${skinCounter}_bang.png")`;

        // After a delay, switch back to the PNG image
        setTimeout(function() {
            catAnimation.style.backgroundImage = `url("assets/cat${skinCounter}.png")`;
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

    // Check if the button can be upgraded
    checkUpgradability();
});

// Upgrade button event handler
document.getElementById("upgradeButton").addEventListener("click", function() {
    if (canUpgrade) {
        // Deduct the upgrade cost
        score -= upgradeThreshold;
        // Increase the skin counter (e.g., from 1 to 2)
        skinCounter++;
        // Update the UI
        document.getElementById("score").textContent = score;

        // Update the cat image to the new skin
        const catAnimation = document.getElementById("cat");
        catAnimation.style.backgroundImage = `url("assets/cat${skinCounter}.png")`;

        // Check if the button can be upgraded after the upgrade
        checkUpgradability();
    }
});

// Initial check for upgradability
checkUpgradability();
