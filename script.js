

// Typing effect settings
const typewriterText = ["a Software Developer", "an AI Enthusiast", "a Problem Solver"];
const colors = ["#b74b4b", "#b74b4b", "#b74b4b", "#b74b4b"];
let typewriterIndex = 0;
let charIndex = 0;

function type() {
    const changingText = document.getElementById("changing-text");

    // If the current text isn't fully typed out
    if (charIndex < typewriterText[typewriterIndex].length) {
        const span = `<span style="color:${colors[typewriterIndex]}">${typewriterText[typewriterIndex].charAt(charIndex)}</span>`;
        changingText.innerHTML += span;
        charIndex++;
        setTimeout(type, 100); // Adjust typing speed here
    } else {
        // Pause before erasing
        setTimeout(erase, 2000);
    }
}
    

function erase() {
    const changingText = document.getElementById("changing-text");

    // If the current text isn't fully erased
    if (charIndex > 0) {
        const textContent = changingText.innerHTML;
        changingText.innerHTML = textContent.slice(0, -1);
        charIndex--;
        setTimeout(erase, 50); // Adjust erasing speed here
    } else {
        typewriterIndex++;
        if (typewriterIndex >= typewriterText.length) {
            typewriterIndex = 0; // Reset index
        }
        charIndex = 0; // Reset char index
        // Pause before typing next text
        setTimeout(() => {
            // Clear the previous text
            changingText.innerHTML = "I am ";
            type(); // Start typing the next text
        }, 500);
    }
}

// Rotate titles in the background
const changeText = () => {
    const textElement = document.getElementById('changing-title');

    // Fade out effect before changing the text
    textElement.style.opacity = 0;

    setTimeout(() => {
        // Replace the text content
        textElement.textContent = titles[index];
        textElement.style.opacity = 1;

        // Update index for the next text
        index = (index + 1) % titles.length; // Loop back to the first title
    }, 500); // Wait for fade-out effect before changing text
};

// Start typing animation and title rotation on window load
window.onload = function () {
    type();
    setInterval(changeText, 3000); // Change the title every 3 seconds
};
