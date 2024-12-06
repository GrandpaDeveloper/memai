// Efecto de aparición al hacer scroll
const sections = document.querySelectorAll('header, section');

window.addEventListener('scroll', () => {
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < window.innerHeight - 50) {
      section.classList.add('fade-in');
    }
  });
});

// Gráficos con datos ficticios
const createChart = (id, label, data, colors) => {
  const ctx = document.getElementById(id).getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['ChatGPT', 'Claude', 'Gemini'],
      datasets: [{
        label,
        data,
        backgroundColor: colors,
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false }
      },
      scales: {
        x: { ticks: { color: '#fff' }, grid: { color: '#333' } },
        y: { ticks: { color: '#fff' }, grid: { color: '#333' } }
      }
    }
  });
};

createChart('marketCapChart', 'Market Cap', [500, 400, 300], ['#4caf50', '#f44336', '#2196f3']);
createChart('costChart', 'Cost', [20, 25, 15], ['#f44336', '#2196f3', '#4caf50']);
createChart('speedChart', 'Speed', [8, 7, 9], ['#4caf50', '#f44336', '#2196f3']);
createChart('intelligenceChart', 'Intelligence', [90, 85, 88], ['#2196f3', '#4caf50', '#f44336']);
