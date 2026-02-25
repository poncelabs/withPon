document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".carousel img");
    const nextBtn = document.querySelector(".next");
    const prevBtn = document.querySelector(".prev");
    let current = 0;

    function showSlide(index) {
        slides.forEach(s => s.classList.remove("active"));
        slides[index].classList.add("active");
    }

    nextBtn.addEventListener("click", () => {
        current = (current + 1) % slides.length;
        showSlide(current);
    });

    prevBtn.addEventListener("click", () => {
        current = (current - 1 + slides.length) % slides.length;
        showSlide(current);
    });

    // Auto-scroll
    let autoSlide = setInterval(() => {
        current = (current + 1) % slides.length;
        showSlide(current);
    }, 4000);

    const carousel = document.querySelector(".carousel");
    carousel.addEventListener("mouseenter", () => clearInterval(autoSlide));
    carousel.addEventListener("mouseleave", () => {
        autoSlide = setInterval(() => {
            current = (current + 1) % slides.length;
            showSlide(current);
        }, 4000);
    });
});

