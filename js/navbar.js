const navbar = document.getElementById('navbar');
console.log(navbar);
const navLinks1 = document.querySelectorAll('.nav-link');

const sections1 = document.querySelectorAll('section, header');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
    if (entry.isIntersecting) {
        // Cambiar color de barra según sección
        if (entry.target.id === 'inicio') {
        /* navbar.classList.remove('bg-green-800', 'shadow-lg'); */
        navbar.classList.add('bg-transparent');
        } else {
        navbar.classList.remove('bg-transparent');
        /* navbar.classList.add('bg-green-800', 'shadow-lg'); */
        }

        // Resaltar enlace activo
        navLinks1.forEach(link => {
        link.classList.remove('text-green-300', 'font-bold');
        if (link.getAttribute('href').substring(1) === entry.target.id) {
            link.classList.add('text-green-300', 'font-bold');
        }
        });
    }
    });
}, { threshold: 0.3 });

sections1.forEach(section => {
    observer.observe(section);
});

// Menu hamburguesa
const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
menuBtn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

// Navbar activo
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 80;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });
  navLinks.forEach((link) => {
    link.classList.remove("active-link");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active-link");
    }
  });
});

// Contadores animados
const counters = document.querySelectorAll(".counter");
counters.forEach(counter => {
  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");
    const c = +counter.innerText;
    const increment = target / 200;
    if (c < target) {
      counter.innerText = `${Math.ceil(c + increment)}`;
      setTimeout(updateCounter, 30);
    } else {
      counter.innerText = target;
    }
  };
  updateCounter();
});