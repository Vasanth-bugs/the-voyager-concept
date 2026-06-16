// --- 1. INTERSECTION OBSERVER (SCROLL ANIMATIONS) ---
const tripwires = document.querySelectorAll('.tripwire');

const observerOptions = {
    root: null,
    threshold: 0.5 
};

const observerCallback = (entries) => {
    entries.forEach(entry => {
        const targetSelector = entry.target.getAttribute('data-target');
        const targetText = document.querySelector(targetSelector);

        if (entry.isIntersecting) {
            targetText.classList.add('fade-in-active');
        } else {
            targetText.classList.remove('fade-in-active');
        }
    });
};

const scrollObserver = new IntersectionObserver(observerCallback, observerOptions);

tripwires.forEach(wire => {
    scrollObserver.observe(wire);
});

// --- 2. CUSTOM CURSOR LOGIC ---
const customCursor = document.querySelector('.custom-cursor');

document.addEventListener('mousemove', (event) => {
    customCursor.style.left = event.clientX + 'px';
    customCursor.style.top = event.clientY + 'px';
});