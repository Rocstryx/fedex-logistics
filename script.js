document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector("header");
    
    // Change the background color of the header when the user scrolls
    window.addEventListener("scroll", function() {
        if (window.scrollY > 50) {
            header.style.backgroundColor = "#34495e";
        } else {
            header.style.backgroundColor = "#2c3e50";
        }
    });
});
