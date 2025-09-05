const chk = document.getElementById('chk');

// alternar tema
chk.addEventListener('change', () => {
  document.documentElement.classList.toggle('light');

  const isLight = document.documentElement.classList.contains('light');
  const particleColor = isLight ? "#000000" : "#ffffff";
  const lineColor = isLight ? "#000000" : "#ffffff";

  if (window.pJSDom && window.pJSDom.length > 0) {
    const pJS = window.pJSDom[0].pJS;

    pJS.particles.color.value = particleColor;
    pJS.particles.line_linked.color = lineColor;

    pJS.fn.particlesRefresh();
  }
});

// partículas
particlesJS("particles-container", {
  particles: {
    number: { value: 50, density: { enable: true, value_area: 900 } },
    color: { value: "#ffffff" }, 
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#000000" },
      polygon: { nb_sides: 5 }
    },
    opacity: { value: 0.5 },
    size: { value: 3, random: true },
    line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 1, width: 1 },
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
