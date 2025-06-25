// Função para rolagem suave nas âncoras
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});

// Animação ao carregar a página (fade in)
window.addEventListener('load', () => {
  document.body.style.opacity = 1;
  document.body.style.transition = "opacity 1.5s ease-in-out";
});

// Animação de scroll (desaparecimento e reaparecimento do cabeçalho)
let lastScrollTop = 0;
window.addEventListener("scroll", function() {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    // Desaparece o cabeçalho ao rolar para baixo
    document.querySelector('header').style.top = "-100px";
  } else {
    // Reaparece o cabeçalho ao rolar para cima
    document.querySelector('header').style.top = "0";
  }
  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Para não ficar negativo
}, false);
