// Array of texts to display
const typewriterText = ["a Software Developer", "an AI Enthusiast", "a Problem Solver" ];
let typewriterIndex = 0;
let charIndex = 0;

function type() {
    const changingText = document.getElementById("changing-text");
    if (charIndex < typewriterText[typewriterIndex].length) {
        const span = typewriterText[typewriterIndex].charAt(charIndex);
        // Add the typewriter text in the specified color
        changingText.innerHTML = "I am " + "<span style='color: #e91e63'>" + typewriterText[typewriterIndex].slice(0, charIndex + 1) + "</span>";
        charIndex++;
        setTimeout(type, 100);
    } else {
        setTimeout(erase, 2000);
    }
}

function erase() {
    const changingText = document.getElementById("changing-text");
    if (charIndex > 0) {
        // Keep the color while erasing
        changingText.innerHTML = "I am " + "<span style='color: #e91e63'>" + typewriterText[typewriterIndex].slice(0, charIndex - 1) + "</span>";
        charIndex--;
        setTimeout(erase, 50);
    } else {
        typewriterIndex++;
        if (typewriterIndex >= typewriterText.length) {
            typewriterIndex = 0;
        }
        setTimeout(() => {
            changingText.innerHTML = "I am ";
            charIndex = 0;
            type(); // Start typing the next text
        }, 500);
    }
}


// Initialize the typewriter effect when the page loads
window.onload = function() {
    const changingText = document.getElementById("changing-text");
    if (changingText) {
        changingText.innerHTML = "I am ";
        type();
    }
};

// Tab functionality
document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    function switchTab(tabId) {
        // Remove active class from all tabs and contents
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));

        // Add active class to selected tab and content
        const selectedTab = document.querySelector(`[data-tab="${tabId}"]`);
        const selectedContent = document.querySelector(`#${tabId}`);
        
        if (selectedTab && selectedContent) {
            selectedTab.classList.add('active');
            selectedContent.classList.add('active');
        }
    }

    // Add click event listeners to all tab buttons
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabId = button.getAttribute('data-tab');
            switchTab(tabId);
        });
    });

    // Set default active tab
    if (tabButtons.length > 0) {
        const firstTabId = tabButtons[0].getAttribute('data-tab');
        switchTab(firstTabId);
    }


    function toggleDropdown() {
        const links = document.querySelector('.links');
        links.classList.toggle('show');
    }
    
    // Close menu when clicking a link
    document.querySelectorAll('.links a').forEach(link => {
        link.addEventListener('click', () => {
            const links = document.querySelector('.links');
            if (links.classList.contains('show')) {
                links.classList.remove('show');
            }
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        const links = document.querySelector('.links');
        const hamburg = document.querySelector('.hamburg');
        if (!links.contains(e.target) && !hamburg.contains(e.target) && links.classList.contains('show')) {
            links.classList.remove('show');
        }
    });
});