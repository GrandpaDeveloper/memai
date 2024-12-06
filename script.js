// Configuración del gráfico de ejemplo
const ctx = document.getElementById('aiChart').getContext('2d');
const aiChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['ChatGPT', 'Claude', 'Gemini'],
        datasets: [{
            label: 'Performance Score',
            data: [90, 85, 88], // Datos ficticios por ahora
            backgroundColor: ['#ff6384', '#36a2eb', '#ffce56'],
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
        }
    }
});
