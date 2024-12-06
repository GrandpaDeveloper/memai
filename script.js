const ctx = document.getElementById('aiChart').getContext('2d');
const aiChart = new Chart(ctx, {
    type: 'candlestick',
    data: {
        datasets: [{
            label: 'AI Performance Comparison',
            data: [
                { x: 'ChatGPT', o: 85, h: 90, l: 80, c: 88 },
                { x: 'Claude', o: 80, h: 88, l: 75, c: 85 },
                { x: 'Gemini', o: 83, h: 89, l: 82, c: 87 }
            ], // Datos ficticios
            borderColor: '#ffffff',
            color: {
                up: '#28a745', // Verde para subidas
                down: '#dc3545', // Rojo para bajadas
                unchanged: '#ffffff' // Blanco para sin cambios
            }
        }]
    },
    options: {
        plugins: {
            legend: {
                display: true,
                labels: {
                    color: '#ffffff'
                }
            }
        },
        scales: {
            x: {
                ticks: { color: '#ffffff' },
                grid: { color: '#333333' }
            },
            y: {
                ticks: { color: '#ffffff' },
                grid: { color: '#333333' }
            }
        },
        responsive: true,
        maintainAspectRatio: false
    }
});
