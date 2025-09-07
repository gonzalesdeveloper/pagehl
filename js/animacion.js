document.addEventListener("DOMContentLoaded", () => {
const counters = document.querySelectorAll(".counter");
const options = { threshold: 0.5 };

const animateCounter = (counter) => {
    const target = +counter.getAttribute("data-target");
    const duration = 2000; // 2s
    const stepTime = Math.max(Math.floor(duration / target), 20);
    let current = 0;

    const update = () => {
    current += Math.ceil(target / (duration / stepTime));
    if (current >= target) {
        counter.textContent = target;
    } else {
        counter.textContent = current;
        setTimeout(update, stepTime);
    }
    };
    update();
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
    if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        const counter = entry.target.querySelector(".counter");
        if (counter && !counter.classList.contains("done")) {
        animateCounter(counter);
        counter.classList.add("done");
        }
    }
    });
}, options);

document.querySelectorAll(".fade-in").forEach(el => observer.observe(el));
});
