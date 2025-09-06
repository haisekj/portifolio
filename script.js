// Selecionar checkbox
const chk = document.getElementById('chk');

// -----------------------------
// Checar tema salvo no localStorage
// -----------------------------
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  document.documentElement.classList.toggle('light', savedTheme === 'light');
}

// Atualizar partículas de acordo com o tema salvo
const particleColor = savedTheme === 'light' ? "#000000" : "#ffffff";
const lineColor = savedTheme === 'light' ? "#000000" : "#ffffff";

// Inicializa partículas com cores corretas
particlesJS("particles-container", {
  particles: {
    number: { value: 50, density: { enable: true, value_area: 900 } },
    color: { value: particleColor }, 
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#000000" },
      polygon: { nb_sides: 5 }
    },
    opacity: { value: 0.5 },
    size: { value: 3, random: true },
    line_linked: { enable: true, distance: 150, color: lineColor, opacity: 1, width: 1 },
    move: { enable: true, speed: 3, out_mode: "out" }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" },
      resize: true
    },
    modes: {
      repulse: { distance: 120, duration: 0.2 },
      push: { particles_nb: 4 }
    }
  },
  retina_detect: true
});

// -----------------------------
// Alternar tema ao clicar no toggle
// -----------------------------
chk.addEventListener('change', () => {
  const isLight = document.documentElement.classList.toggle('light');
  localStorage.setItem('theme', isLight ? 'light' : 'dark');

  // Atualizar cores das partículas
  const particleColor = isLight ? "#000000" : "#ffffff";
  const lineColor = isLight ? "#000000" : "#ffffff";

  if (window.pJSDom && window.pJSDom.length > 0) {
    const pJS = window.pJSDom[0].pJS;
    pJS.particles.color.value = particleColor;
    pJS.particles.line_linked.color = lineColor;
    pJS.fn.particlesRefresh();
  }
});
