import { useEffect, useRef } from 'react';

interface RetentionTrendChartProps {
  className?: string;
}

export const RetentionTrendChart = ({ className = '' }: RetentionTrendChartProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const chartRef = useRef<any>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const loadChart = async () => {
      const { Chart, registerables } = await import('chart.js');
      Chart.register(...registerables);

      const ctx = canvasRef.current!.getContext('2d')!;

      // Trend data showing declining retention rates
      const data = {
        labels: ['2020', '2021', '2022', '2023', '2024', '2025'],
        datasets: [{
          label: 'Gen Z Retention Rate',
          data: [78, 74, 68, 62, 58, 54],
          borderColor: 'hsl(220, 70%, 55%)',
          backgroundColor: 'hsla(220, 70%, 55%, 0.1)',
          borderWidth: 3,
          fill: true,
          tension: 0.4,
          pointBackgroundColor: 'hsl(220, 70%, 55%)',
          pointBorderColor: '#ffffff',
          pointBorderWidth: 3,
          pointRadius: 6,
          pointHoverRadius: 8,
        }]
      };

      const config = {
        type: 'line' as const,
        data,
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false
            },
            tooltip: {
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              titleColor: '#1a1a1a',
              bodyColor: '#1a1a1a',
              borderColor: 'hsl(220, 70%, 55%)',
              borderWidth: 1,
              cornerRadius: 12,
              displayColors: false,
              titleFont: { size: 14, weight: 'bold' as const },
              bodyFont: { size: 13 },
              padding: 12,
              callbacks: {
                title: function(context: any) {
                  return `Year ${context[0].label}`;
                },
                label: function(context: any) {
                  return `Retention Rate: ${context.parsed.y}%`;
                }
              }
            }
          },
          scales: {
            y: {
              beginAtZero: false,
              min: 40,
              max: 85,
              grid: {
                color: 'rgba(0, 0, 0, 0.05)',
                drawBorder: false,
              },
              ticks: {
                color: '#000000',
                font: { size: 12 },
                callback: function(value: any) {
                  return value + '%';
                }
              }
            },
            x: {
              grid: {
                display: false,
              },
              ticks: {
                color: '#000000',
                font: { size: 12, weight: 'normal' as const },
              }
            }
          },
          animation: {
            duration: 2000,
            easing: 'easeOutQuart' as const,
          }
        }
      };

      chartRef.current = new Chart(ctx, config);
    };

    loadChart();

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  return (
    <div className={`relative h-80 ${className}`}>
      <canvas ref={canvasRef} />
    </div>
  );
};