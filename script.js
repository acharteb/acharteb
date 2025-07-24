// Efecto de escritura automática
const text = "Hola, soy Alfredo Charte";
let i = 0;
const speed = 100;

function typeWriter() {
  if (i < text.length) {
    document.querySelector(".typing-text").innerHTML = text.substring(0, i + 1);
    i++;
    setTimeout(typeWriter, speed);
  }
}

window.onload = function () {
  typeWriter();
};

// Partículas de fondo
particlesJS("particles-js", {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: "#00f3ff" },
    shape: { type: "circle" },
    opacity: { value: 0.5, random: true },
    size: { value: 3, random: true },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      out_mode: "out"
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" }
    }
  }
});

// Efecto de brillo pulsante en las redes sociales
function addSocialEffects() {
  const socialCards = document.querySelectorAll('.social-card');
  
  socialCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-10px)';
      this.style.transition = 'all 0.3s ease';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
  });
}

// Llamar a la función cuando la página cargue
window.addEventListener('load', addSocialEffects);

// Efecto de partículas especiales al hacer clic en redes sociales
document.querySelectorAll('.social-card').forEach(card => {
  card.addEventListener('click', function(event) {
    // Crear efecto visual de explosión de partículas
    createClickEffect(event);
  });
});

function createClickEffect(event) {
  const x = event.clientX;
  const y = event.clientY;
  
  // Crear elemento visual
  const effect = document.createElement('div');
  effect.style.position = 'fixed';
  effect.style.left = x + 'px';
  effect.style.top = y + 'px';
  effect.style.width = '10px';
  effect.style.height = '10px';
  effect.style.background = '#00f3ff';
  effect.style.borderRadius = '50%';
  effect.style.boxShadow = '0 0 20px #00f3ff';
  effect.style.pointerEvents = 'none';
  effect.style.zIndex = '9999';
  
  document.body.appendChild(effect);
  
  // Animar el efecto
  let size = 10;
  const animate = () => {
    size += 5;
    effect.style.width = size + 'px';
    effect.style.height = size + 'px';
    effect.style.opacity = (1 - size/100).toString();
    
    if (size < 100) {
      requestAnimationFrame(animate);
    } else {
      document.body.removeChild(effect);
    }
  };
  
  requestAnimationFrame(animate);
}