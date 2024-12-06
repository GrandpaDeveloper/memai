// Configuración del gráfico tipo de trading
const ctx = document.getElementById('aiChart').getContext('2d');
const aiChart = new Chart(ctx, {
    type: 'candlestick', // Gráfico de tipo vela para similitud con trading
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
                    color: '#ffffff' // Color de las etiquetas
                }
            }
        },
        scales: {
            x: {
                ticks: { color: '#ffffff' }, // Color de las etiquetas en X
                grid: { color: '#333333' } // Color de las líneas del grid
            },
            y: {
                ticks: { color: '#ffffff' }, // Color de las etiquetas en Y
                grid: { color: '#333333' } // Color de las líneas del grid
            }
        },
        responsive: true,
        maintainAspectRatio: false
    }
});

