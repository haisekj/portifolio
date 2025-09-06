// Selecionar checkbox
const chk = document.getElementById('chk');

// -----------------------------
// Verifica tema salvo no localStorage
// -----------------------------
const savedTheme = localStorage.getItem('theme') || 'dark';
document.documentElement.classList.toggle('light', savedTheme === 'light');

// Atualiza checkbox para refletir o tema
if (chk) chk.checked = savedTheme === 'light';

// Define cores das partículas
const particleColor = savedTheme === 'light' ? "#000000" : "#ffffff";
const lineColor = savedTheme === 'light' ? "#000000" : "#ffffff";

// Inicializa partículas
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
// Alterna tema ao clicar
// -----------------------------
if (chk) {
  chk.addEventListener('change', () => {
    const isLight = document.documentElement.classList.toggle('light');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');

    // Atualiza partículas
    if (window.pJSDom && window.pJSDom.length > 0) {
      const pJS = window.pJSDom[0].pJS;
      pJS.particles.color.value = isLight ? "#000000" : "#ffffff";
      pJS.particles.line_linked.color = isLight ? "#000000" : "#ffffff";
      pJS.fn.particlesRefresh();
    }
  });
}
