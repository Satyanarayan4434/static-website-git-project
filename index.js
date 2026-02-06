function toggleDetails(card) {
    const isActive = card.classList.contains("active");

    document.querySelectorAll(".card").forEach(c => {
        c.classList.remove("active");
    });

    if (!isActive) {
        card.classList.add("active");
    }
}

// Small DevOps vibe animation on load
window.addEventListener("load", () => {
    const cards = document.querySelectorAll(".card");
    cards.forEach((card, index) => {
        card.style.opacity = 0;
        card.style.transform = "translateY(20px)";
        setTimeout(() => {
            card.style.transition = "all 0.6s ease";
            card.style.opacity = 1;
            card.style.transform = "translateY(0)";
        }, index * 150);
    });
});

