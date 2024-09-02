function navigateTo(page) {
    window.location.href = page;
}

function sendMail() {
    window.location.href = "mailto:contact@rescuestraydogs.org";
}

// Basic slider functionality
document.querySelectorAll('.slider').forEach(slider => {
    slider.addEventListener('wheel', (event) => {
        event.preventDefault();
        slider.scrollBy({
            left: event.deltaY < 0 ? -30 : 30
        });
    });
});
