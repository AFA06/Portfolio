const typewriterText = ["a Software Developer", "an AI Enthusiast", "a Problem Solver"];
const colors = ["#ffcc00", "#00ccff", "#ff0066"];
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

// Start typing animation on window load
window.onload = function() {
    const changingText = document.getElementById("changing-text");
    changingText.innerHTML = "I am "; // Initial text before typing
    type();
};

// Responsive navbar function
function toggleDropdown() {
    const links = document.querySelector('.links');
    links.classList.toggle('active');
}
